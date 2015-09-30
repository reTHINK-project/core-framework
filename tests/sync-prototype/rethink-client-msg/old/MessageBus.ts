import * as inter from 'rethink/sync/interfaces';

export class MessageBus {
    private _con: inter.IConnection;
    
    private _subscriptions: ISubscriptionMap = {};
    
    private _msgId = 1;
    private _replyTimeOut = 3000;  //default to 3s ?
    private _replyCallbacks = {};
    
    constructor(con: inter.IConnection) {
        this._con = con;
        this._con.onMessage((msg) => {
            if(msg.header.type == inter.Type.REPLY) {
                console.log('REPLY: ', msg);
                var replyFun = this._replyCallbacks[msg.header.id];
                if(replyFun) {
                    replyFun(msg);
                    delete this._replyCallbacks[msg.header.id]; 
                }
            } else {
                console.log('PUBLISH: ', msg);
                this.localPublish(msg);
            }
        });
    }
    
    public subscribe(address: string, callback: (msg: inter.Message) => void): Subscription {
        var s = new Subscription(this._subscriptions, address, callback);
        var subs = this._subscriptions[address];
        if(subs == null) {
            subs = [];
            this._subscriptions[address] = subs;
        }
        
        subs.push(s);
        return s;
    }
    
    public publish(msg: inter.Message): void {
        this.setupID(msg);
        
        this.localPublish(msg);
        this._con.send(msg);
    }
    
    public send(msg: inter.Message, replyCallback?: (msg: inter.Message) => void): void {
        this.setupID(msg);
        
        if(replyCallback) {
            this._replyCallbacks[msg.header.id] = replyCallback;
            setTimeout(() => {
                var replyFun = this._replyCallbacks[msg.header.id];
                if(replyFun) {
                    var errorMsg: inter.Message = {
                        header: {
                            "type": 'reply'
                        },
                        body: {
                            code: 'error',
                            desc: 'Reply timeout!'
                        }
                    }
                    
                    replyFun(errorMsg);
                    delete this._replyCallbacks[msg.header.id];
                    console.log('REPLY-TIMEOUT: ' + msg.header.id);
                }
            }, this._replyTimeOut);   
        }
        
        this._con.send(msg);
    }
    
    private setupID(msg: inter.Message) {
        //TODO: id per origin?
        msg.header.id = this._msgId;
        this._msgId++;
    }
    
    private localPublish(msg: inter.Message): void {
        var subs = this._subscriptions[msg.header.to];
        if(subs) {
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