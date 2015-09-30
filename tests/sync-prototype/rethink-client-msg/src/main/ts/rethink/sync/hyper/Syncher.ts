import * as promise from 'es6-promise';
import * as inter from 'rethink/sync/interfaces';
import * as bus from 'rethink/sync/hyper/MiniBus';
import * as sync from 'rethink/sync/hyper/SyncObject';

export var CreateType = {
    CREATE_REQ: 'create-req',
    CREATE:     'create',
    DELETE:     'delete'
}

export interface CreateEvent {
    rName: string;
    cType: string;
    owner: string,
}

export interface RequestEvent extends CreateEvent {    
    accept(): sync.SyncObject;
    reject(): void;
}

export class Syncher {
    public static NAME: string = 'syncher';
    
    private _mb: bus.MiniBus;
    
    private _schemas = {};
    private _objs = {};     //<resURL, {obj: SyncObject, to: string, version: number, cQueue: {<ver>: msg}}>

    private _observers: ((event: RequestEvent) => void)[] = [];
    private _disableSendChanges = false;
    
    constructor(mb: bus.MiniBus) {
        var self = this;
        
        this._mb = mb;
        mb.subscribe(Syncher.NAME, (msg) => {
            console.log('RCV: ', msg);
            switch(msg.header.type) {
                case CreateType.CREATE:
                    this.fireEvent({
                        rName: msg.body.res,
                        cType: CreateType.CREATE_REQ,
                        owner: msg.header.from,
                        
                        accept(): sync.SyncObject {
                            var so = self.createObject(msg.body.res, msg.header.from, msg.body.schema, msg.header.from, msg.body.data);
                            msg.reply(inter.Code.OK);
                            return so;
                        },
                        
                        reject(): void {
                            msg.reply(inter.Code.ERROR, 'Creation rejected');
                        }
                    });
                    break;   
                case CreateType.DELETE:
                    console.log('DELETE-REQ: ', msg);
                    //TODO: only the owner can delete the object 
                    break;
                default:
                    var objData = this._objs[msg.body.res];
                    if(objData) {
                        this.processChange(objData, msg);
                    } else {
                        msg.reply(inter.Code.ERROR, 'Object not found!');
                    }
            }
        });
    }
        
    public addSchema(schemaURL: string, schema: any): void {
        if(this._schemas.hasOwnProperty(schemaURL)) {
            throw 'There is already available schema: ' + schemaURL;
        }
        
        this._schemas[schemaURL] = schema;
    }

    public create(resourceName: string, schemaURL: string, toURL: string, data?: any): Promise<sync.SyncObject> {        
        return new Promise<sync.SyncObject>((resolve, reject) => {
            if(this._objs.hasOwnProperty(resourceName)) {
                reject('Already available object: ' + resourceName);
            }
            
            if(!this._schemas.hasOwnProperty(schemaURL)) {
                reject('There is no schema: ' + schemaURL);
            }
            
            var msg = {
                header: {
                    "type": CreateType.CREATE,
                    "to": toURL
                },
                body: {
                    //ver: 0,
                    res: resourceName,
                    schema: schemaURL
                }
            }
            
            if(data) {
                msg.body['data'] = data;
            }
            
            this.sendMsg(msg, (reply) => {
                if(reply.body.code == inter.Code.OK) {
                    //console.log('CREATE-OK: ', reply);
                    var so = this.createObject(resourceName, this._mb.owner, schemaURL, toURL, data);
                    
                    resolve(so);
                } else {
                    //console.log('CREATE-ERROR: ', reply);
                    reject(reply.body.desc);
                }  
            });
        });
    }
    
    public observe(callback: (event: RequestEvent) => void): void {
        this._observers.push(callback);
    }
    
    private fireEvent(event: RequestEvent): void {
        this._observers.forEach((callback) => {
            callback(event);
        });
    }
        
    private createObject(resourceName: string, owner: string, schemaURL: string, toURL: string, data?: any): sync.SyncObject {
        var so = new sync.SyncObject(resourceName, owner, schemaURL, data);
        so.observe((event) => {
            this.onChange(event);
        });
                            
        this._objs[so.name] = {
            obj: so,
            to: toURL,
            version: 0,
            cQueue: []
        };

        return so;
    }
    
    private processChange(objData: any, msg: inter.Message): void {
        if(msg.body.ver) {
            if(msg.body.ver > objData.version) {
                objData.cQueue[msg.body.ver] = msg;
            } else {
                msg.reply(inter.Code.ERROR, 'Invalid object version!');
            }
            
            this.processQueue(objData);    
        } else {
            this.changeObject(objData.obj, msg);  
        }
    }
    
    private processQueue(objData: any): void {
        var nextMsg = objData.cQueue[objData.version + 1];
        if(nextMsg) {
            this.changeObject(objData.obj, nextMsg);
            objData.version++;
            
            //on change per event loop is more robust to bugs!
            setTimeout(() => {
                this.processQueue(objData);
            });
        } else {
            console.log('Waiting for version: ' + (objData.version + 1));
        }
    }
    
    private changeObject(syncObj: sync.SyncObject, msg: inter.Message): void {
        var path: string = msg.body.attrib;
        var value = msg.body.value;
        var findResult = syncObj.findBefore(path);
    
        this._disableSendChanges = true;
        
        if(msg.header.type == sync.ChangeType.UPDATE) {
            findResult.obj[findResult.last] = value;
        } else {
            if(msg.header.type == sync.ChangeType.ADD) {
                if(msg.body.oType == sync.ObjectType.OBJECT) {
                    findResult.obj[findResult.last] = value;
                } else {
                    //ARRAY
                    var arr = (<Array<any>>findResult.obj);
                    var index: number = findResult.last;
                    Array.prototype.splice.apply(arr, [index, 0].concat(value));
                }
            } else { 
                //REMOVE
                if(msg.body.oType == sync.ObjectType.OBJECT) {
                    delete findResult.obj[findResult.last];
                } else {
                    //ARRAY
                    var arr:Array<any> = findResult.obj;
                    var index: number = findResult.last;
                    arr.splice(index, value);
                }
            }
        }
    }
    
    private onChange(event: sync.ChangeEvent) {
        //console.log(event.objType + '-' + event.cType + ' <<' + event.obj.name + '>> -> ' + event.field + ' = ' + JSON.stringify(event.data));
        
        if(this._disableSendChanges) {
            //console.log('SEND-DISABLED');
            this._disableSendChanges = false;
            return;
        }
        
        var objData = this._objs[event.obj.name];
        objData.version++;
        
        var msg = {
            header: {
                "type": event.cType,
                "to": objData.to
            },
            body: {
                //ver: objData.version,
                res: event.obj.name,
                oType: event.objType,
                attrib: event.field,
                value: event.data
            }
        }
        
        this.sendMsg(msg);
    }
    
    private sendMsg(msg: inter.Message, replyCallback?: (msg: inter.Message) => void) {
        console.log('SEND: ', msg);
        msg.header.comp = Syncher.NAME;
        this._mb.send(msg, replyCallback);
    }
}