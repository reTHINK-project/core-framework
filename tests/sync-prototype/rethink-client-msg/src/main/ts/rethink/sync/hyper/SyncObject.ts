export var ChangeType = {
    UPDATE:     'update',
    ADD:        'add',
    REMOVE:     'remove'
}

export var ObjectType = {
    OBJECT:     'object',
    ARRAY:      'array'
}

export interface ChangeEvent {
    obj: SyncObject;
    cType: string;
    objType: string;
    field: string;
    
    data?: any;    
}

export class SyncObject {
    private _name: string;
    private _owner: string;
    private _url: string;
    
    private _schema: any;
    private _data: any;
    
    private _observers: ((event: ChangeEvent) => void)[] = [];
    private _filters = {}; //{<filter>: {type: <start, exact>, callback: <function>} }
    
    constructor(name: string, owner: string, schema: any, data?: any) {
        this._name = name;
        this._owner = owner;
        this._url = SyncObject.URL(owner, name);
        
        this._schema = schema;
        if(data) {
            this._data = data;
        } else {
            this._data = {};
        }
        
        this.internalObserve(new Path(), this.data);
    }
    
    public static URL(resOwner, resName): string {
        return resOwner + '/' + resName;
    }
 
    public get name() {return this._name;}
    public get owner() {return this._owner;}
    public get url() {return this._url;}
    
    public get schema() {return this._schema;}
    public get data() {return this._data;}
    
    public observe(callback: (event: ChangeEvent) => void): void {
        this._observers.push(callback);
    }
    
    public observeFilter(filter: string, callback: (event: ChangeEvent) => void): void {        
        var key = filter;
        var filterObj = {
            "type": FilterType.EXACT,
            callback: callback
        };
        
        if(filter.indexOf('*') == filter.length - 1) {
            filterObj.type = FilterType.START;
            key = filter.substr(0, filter.length - 1);
        }
        
        this._filters[key] = filterObj;
    }
    
    public find(path: string): any {
        var list = path.split('.');
        return this.findWithSplit(list);
    }
    
    public findBefore(path: string): {last: any, obj: any} {
        var result: any = {};
        var list = path.split('.');
        
        result.last = list.pop();
        result.obj = this.findWithSplit(list);        
        return result;
    }
        
    private findWithSplit(list: string[]): any {
        var obj = this._data;
        list.forEach((value) => {
            obj = obj[value];
        });
        
        return obj;
    }
    
    private fireEvent(event: ChangeEvent): void {
        Object.keys(this._filters).forEach((key) => {
            var filter = this._filters[key];
            
            if(filter.type == FilterType.START) {
                //if starts with filter...
                if(event.field.indexOf(key) == 0) {
                    filter.callback(event);
                }    
            } else if(filter.type == FilterType.EXACT) {
                //exact match
                if(event.field == key) {
                    filter.callback(event);
                }
            }
        });

        this._observers.forEach((callback) => {
            callback(event);
        });
    }
    
    private isObservable(obj: any): boolean {
        if(obj.constructor === Object || obj.constructor === Array)
            return true;
        return false;
    }
    
    private internalObserve(path: Path, obj: any): void {
        if(this.isObservable(obj)) {
            var handler = (changes) => {
                this.onChanges(path, changes);
            };
            
            if(obj.constructor === Object) {
                //console.log('OBSERVE-OBJECT: <<' + this._name + '>>' + path);
                (<any>Object).observe(obj, handler);
                
                for(let prop in obj) {
                    if(this.isObservable(obj[prop])) {
                        this.internalObserve(path.new(prop), obj[prop]);
                    }
                }
            } else if(obj.constructor === Array) {
                //console.log('OBSERVE-ARRAY: <<' + this._name + '>>' + path);
                (<any>Array).observe(obj, handler);
                
                for(let prop in obj) {
                    if(this.isObservable(obj[prop])) {
                        this.internalObserve(path.new(new ArrayIndex(obj[prop], prop)), obj[prop]);
                    }
                }
            }
        }
    }
    
    /*
    private internalUnobserve(path: Path, obj: any): void {
        if(this.isObservable(obj)) {
            for(let prop in obj) {
                this.unobserve(path + '.' + prop, obj[prop]);
            }
            
            if(obj.constructor === Object) {
                console.log('UN-OBSERVE-OBJECT: <<' + this._name + '>>' + path);
                (<any>Object).unobserve(obj, this._observers[path]);
            } else if(obj.constructor === Array) {
                console.log('UN-OBSERVE-ARRAY: <<' + this._name + '>>' + path);
                (<any>Array).unobserve(obj, this._observers[path]);
            }
        }
    }
    */
    
    private onChanges(path: Path, changes: any): void {
        for(var i in changes) {
            var obj = changes[i].object;
            var objType: string;
            
            if(obj.constructor == Object) 
                objType = ObjectType.OBJECT;
            if(obj.constructor == Array) 
                objType = ObjectType.ARRAY;
            
            if(changes[i].type === 'splice') {
                var idx = <number>changes[i].index;
                var field = path.new(''+idx);

                var removeSize = changes[i].removed.length;
                if(removeSize != 0) {
                    var removeValues = changes[i].removed;
                    this.fireEvent({
                        obj: this,
                        cType: ChangeType.REMOVE,
                        objType: objType,
                        field: field.toString(),
                        
                        data: removeSize
                    });
                    
                    removeValues.forEach((value, index) => {
                        if(this.isObservable(value)) { 
                            path.removeIndex(idx + index);
                            //this.unobserve(path + '.' + (idx + index), value);
                        }
                    });
                }
                
                var addSize = changes[i].addedCount;
                if(addSize != 0) {
                    var addValues = obj.slice(idx, idx + addSize);
                    this.fireEvent({
                        obj: this,
                        cType: ChangeType.ADD,
                        objType: objType,
                        field: field.toString(),
                        
                        data: deepClone(addValues)
                    });
                    
                    addValues.forEach((value, index) => {
                        if(this.isObservable(value)) {
                            this.internalObserve(path.new(new ArrayIndex(value, idx + index)), value);
                        }
                    });
                }
                
                //re-define paths...
                if(idx != obj.length - 1)
                    path.reIndexFrom(obj);
                
            } else {
                var field = path.new(changes[i].name);
                //var oldValue = changes[i].oldValue;
                var newValue = obj[changes[i].name];
                
                if(changes[i].type === 'update') {
                    this.fireEvent({
                        obj: this,
                        cType: ChangeType.UPDATE,
                        objType: objType,
                        field: field.toString(),
                        
                        data: deepClone(newValue)
                    });
                    
                    //TODO: remove Path ?
                }
        
                if(changes[i].type === 'add') {
                    this.fireEvent({
                        obj: this,
                        cType: ChangeType.ADD,
                        objType: objType,
                        field: field.toString(),
                        
                        data: deepClone(newValue)
                    });
                    this.internalObserve(field, newValue);
                }
        
                if(changes[i].type === 'delete') {
                    this.fireEvent({
                        obj: this,
                        cType: ChangeType.REMOVE,
                        objType: objType,
                        field: field.toString()
                    });
                    //this.unobserve(field, oldValue);
                    //TODO: remove Path ?
                }
            }
        }
    }
}

var FilterType = {
    START: 'start',
    EXACT: 'exact'    
}

function deepClone(obj: any): any {
    //TODO: simple but inefficient JSON deep clone...
    return JSON.parse(JSON.stringify(obj));
}

//dynamic path for Array index...
class Path {
    private _path = [];
    private _observables: any = {}; //<index:ArrayIndex>
    
    public removeIndex(idx: number): void {
        //console.log('REMOVE-PATH ' + idx);
        delete this._observables[idx];
    }
    
    public reIndexFrom(array: Array<any>) {
        Object.keys(this._observables).forEach((key) => {
            var arrayIndex: ArrayIndex = this._observables[key];
            var idx = array.indexOf(arrayIndex.obj);
            
            if(arrayIndex.idx != idx) {
                //console.log('RE-INDEX: ' + key + '->' + idx);
                arrayIndex.idx = idx;
                delete this._observables[key];
                this._observables[idx] = arrayIndex;
            }
        });
    }
    
    public new(idx: string | ArrayIndex): Path {
        if(idx.constructor == ArrayIndex) {
            //console.log('PATH-OBSERV: ', idx);
            this._observables[(<ArrayIndex>idx).idx] = idx;
        }
        
        var nPath = this.clone();
        nPath._path.push(idx);
        return nPath;
    }
    
    public clone(): Path {
        var nPath = new Path();
        this._path.forEach((value) => {
            nPath._path.push(value);
        });
        
        return nPath;
    }
    
    public toString(): string {
        //TODO: optimize!!
        var str = '';
        this._path.forEach((value, index) => {
            if(index == 0) {
                str = value.toString();
            } else {
                str += '.' + value.toString();    
            }
        });
        
        return str;
    }
}

class ArrayIndex {
    constructor(public obj: Array<any>, public idx: number) {}
    
    public toString(): string {
        return this.idx.toString();
    }
}