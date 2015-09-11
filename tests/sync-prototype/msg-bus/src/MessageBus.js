import Pipeline from 'Pipeline';

export default class MessageBus {
  /* private
    _con: IConnection

    _msgId: number;
    _subscriptions: <string: Subscription[]>

    _replyTimeOut: number
    _replyCallbacks: (msg) => void

    _outbound: Pipeline
    _inbound: Pipeline
  */

  constructor(con) {
    let _self = this;

    _self._con = con;

    _self._msgId = 1;
    _self._subscriptions = [];

    _self._replyTimeOut = 1000; //wait for reply, default to 1s
    _self._replyCallbacks = {};

    _self._outbound = new Pipeline((error) => { console.log(error); });
    _self._inbound = new Pipeline((error) => { console.log(error); });

    _self._con.onMessage((message) => {
      _self._onMessage(message);
    });
  }

  get outbounds() { return this._outbound.handlers; }
  set outbounds(handlers) { this._outbound.handlers = handlers; }

  get inbounds() { return this._inbound.handlers; }
  set inbounds(handlers) { this._inbound.handlers = handlers; }

  subscribe(address, callback) {
    let _self = this;

    let s = new Subscription(_self._subscriptions, address, callback);
    let subs = _self._subscriptions[address];
    if (subs) {
      subs = [];
      _self._subscriptions[address] = subs;
    }

    subs.push(s);
    return s;
  }

  publish(message) {
    this._postMessage(message, 'publish');
  }

  send(message, replyCallback) {
    this._postMessage(message, 'send', replyCallback);
  }

  _setupID(message) {
    message.header.id = this._msgId;
    this._msgId++;
  }

  _onMessage(message) {
    let _self = this;

    _self._inbound.process(message, (msg) => {
      if (msg.header.type === 'reply') {
        console.log('REPLY: ', msg);
        let replyFun = _self._replyCallbacks[msg.header.id];
        if (replyFun) {
          replyFun(msg);
          delete _self._replyCallbacks[msg.header.id];
        }
      } else {
        console.log('PUBLISH: ', msg);
        _self.localPublish(msg);
      }
    });
  }

  _postMessage(message, type, replyCallback) {
    let _self = this;
    _self._setupID(message); //override any existent id

    _self._outbound.process(message, (msg) => {
      if (type === 'publish') {
        _self._localPublish(msg);
        _self._con.send(msg);
      } else if (type === 'send') {
        if (replyCallback) {
          _self._replyCallbacks[msg.header.id] = replyCallback;
          setTimeout(() => {
            let replyFun = _self._replyCallbacks[msg.header.id];
            if (replyFun) {
              let errorMsg = {
                header: {
                  type: 'reply'
                },
                body: {
                  code: 'error',
                  desc: 'Reply timeout!'
                }
              };

              replyFun(errorMsg);
              delete _self._replyCallbacks[msg.header.id];
              console.log('REPLY-TIMEOUT: ' + msg.header.id);
            }
          }, _self._replyTimeOut);
        }

        let subs = _self._subscriptions[msg.header.to];
        if (subs) {
          _self._localPublish(msg);
          //TODO: add reply method to msg? If the reply method has access to MessageBus can be a security breach!
        } else {
          _self._con.send(msg);
        }
      }
    });
  }

  _localPublish(message) {
    let _self = this;

    let subs = _self._subscriptions[message.header.to];
    if (subs) {
      subs.forEach((sub) => {
        sub._callback(message);
      });
    }
  }
}

export class Subscription {
  /* private
    _subscriptions: <string: Subscription[]>;
    _address: string;
    _callback: (msg) => void;
  */

  constructor(subscriptions, address, callback) {
    let _self = this;

    _self._subscriptions = subscriptions;
    _self._address = address;
    _self._callback = callback;
  }

  unsubscribe() {
    let _self = this;

    let subs = _self._subscriptions[_self._address];
    if (subs) {
      let index = subs.indexOf(_self);
      subs.splice(index, 1);
    }
  }
}
