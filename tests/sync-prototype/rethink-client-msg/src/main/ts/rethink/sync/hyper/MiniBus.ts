import * as inter from 'rethink/sync/interfaces';

export class MiniBus {
    private _owner: string;
    private _con: inter.IConnection;
    private _subscriptions: ISubscriptionMap = {};
    
    private _msgId = 1;
    private _replyTimeOut = 3000;  //default to 3s ?
    private _replyCallbacks = {};
    
    constructor(owner: string, con: inter.IConnection) {
        this._owner = owner;
        this._con = con;
        this._con.onMessage((msg) => {
            if(msg.header.type == inter.Type.REPLY) {
                //console.log('REPLY: ', msg);
                var replyFun = this._replyCallbacks[msg.header.id];
                delete this._replyCallbacks[msg.header.id];
                if(replyFun) {
                    replyFun(msg);
                }
            } else {
                //console.log('PUBLISH: ', msg);
                this.localPublish(msg);
            }
        });
    }
    
    public get owner() {return this._owner;}
    
    public subscribe(component: string, callback: (msg: inter.Message) => void): Subscription {
        var s = new Subscription(this._subscriptions, component, callback);
        var subs = this._subscriptions[component];
        if(subs == null) {
            subs = [];
            this._subscriptions[component] = subs;
        }
        
        subs.push(s);
        return s;
    }
    
    public publish(msg: inter.Message): void {
        this.setupID(msg);
        this.sendMsg(msg);
    }
    
    public send(msg: inter.Message, replyCallback?: (msg: inter.Message) => void): void {
        this.setupID(msg);
        
        if(replyCallback) {
            this._replyCallbacks[msg.header.id] = replyCallback;
            setTimeout(() => {
                var replyFun = this._replyCallbacks[msg.header.id];
                delete this._replyCallbacks[msg.header.id];
                if(replyFun) {
                    var errorMsg: inter.Message = {
                        header: {
                            "type": inter.Type.REPLY
                        },
                        body: {
                            code: inter.Code.ERROR,
                            desc: 'Reply timeout!'
                        }
                    }
                    
                    replyFun(errorMsg);
                    //console.log('REPLY-TIMEOUT: ', replyFun, msg);
                }
            }, this._replyTimeOut);
        }
        
        this.sendMsg(msg);
    }
    
    private sendMsg(msg: inter.Message) {
        msg.header['from'] = this._owner;
        this._con.send(msg);
    }
    
    private setupID(msg: inter.Message) {
        //TODO: id per origin?
        msg.header.id = this._msgId;
        this._msgId++;
    }
    
    private localPublish(msg: inter.Message): void {
        //TODO: deliver in order, per address from?
        
        var subs = this._subscriptions[msg.header.comp];
        if(subs) {
            //set reply function...
            msg.reply = (code: string, desc?: string) => {
                var reply = {
                    header: {
                        id: msg.header.id,
                        "type": inter.Type.REPLY,
                        to: msg.header['from'],
                        comp: msg.header['comp']
                    },
                    body: {
                        code: code
                    }    
                }
                
                if(desc) {
                    reply.body['desc'] = desc;    
                }
                
                this.sendMsg(reply);
            }
            
            subs.forEach((sub) => {
                sub.callback(msg);
            });
        }
    }
}

export class Subscription {
    private _subscriptions: ISubscriptionMap;
    private _topic: string;
    
    public callback: (msg: inter.Message) => void;
    
    constructor(subscriptions: ISubscriptionMap, topic: string, callback: (msg: inter.Message) => void) {
        this._subscriptions = subscriptions;
        this._topic = topic;
        this.callback = callback;
    }
    
    public unsubscribe(): void {
        var subs = this._subscriptions[this._topic];
        if(subs) {
            var index = subs.indexOf(this);
            subs.splice(index, 1);
        }
    }
}

interface ISubscriptionMap {
    [key: string]: Subscription[];
}