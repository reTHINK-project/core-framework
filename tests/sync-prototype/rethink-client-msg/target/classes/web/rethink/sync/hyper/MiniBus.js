define(["require", "exports", 'rethink/sync/interfaces'], function (require, exports, inter) {
    var MiniBus = (function () {
        function MiniBus(owner, con) {
            var _this = this;
            this._subscriptions = {};
            this._msgId = 1;
            this._replyTimeOut = 3000;
            this._replyCallbacks = {};
            this._owner = owner;
            this._con = con;
            this._con.onMessage(function (msg) {
                if (msg.header.type == inter.Type.REPLY) {
                    var replyFun = _this._replyCallbacks[msg.header.id];
                    delete _this._replyCallbacks[msg.header.id];
                    if (replyFun) {
                        replyFun(msg);
                    }
                }
                else {
                    _this.localPublish(msg);
                }
            });
        }
        Object.defineProperty(MiniBus.prototype, "owner", {
            get: function () { return this._owner; },
            enumerable: true,
            configurable: true
        });
        MiniBus.prototype.subscribe = function (component, callback) {
            var s = new Subscription(this._subscriptions, component, callback);
            var subs = this._subscriptions[component];
            if (subs == null) {
                subs = [];
                this._subscriptions[component] = subs;
            }
            subs.push(s);
            return s;
        };
        MiniBus.prototype.publish = function (msg) {
            this.setupID(msg);
            this.sendMsg(msg);
        };
        MiniBus.prototype.send = function (msg, replyCallback) {
            var _this = this;
            this.setupID(msg);
            if (replyCallback) {
                this._replyCallbacks[msg.header.id] = replyCallback;
                setTimeout(function () {
                    var replyFun = _this._replyCallbacks[msg.header.id];
                    delete _this._replyCallbacks[msg.header.id];
                    if (replyFun) {
                        var errorMsg = {
                            header: {
                                "type": inter.Type.REPLY
                            },
                            body: {
                                code: inter.Code.ERROR,
                                desc: 'Reply timeout!'
                            }
                        };
                        replyFun(errorMsg);
                    }
                }, this._replyTimeOut);
            }
            this.sendMsg(msg);
        };
        MiniBus.prototype.sendMsg = function (msg) {
            msg.header['from'] = this._owner;
            this._con.send(msg);
        };
        MiniBus.prototype.setupID = function (msg) {
            msg.header.id = this._msgId;
            this._msgId++;
        };
        MiniBus.prototype.localPublish = function (msg) {
            //TODO: deliver in order, per address from?
            var _this = this;
            var subs = this._subscriptions[msg.header.comp];
            if (subs) {
                msg.reply = function (code, desc) {
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
                    };
                    if (desc) {
                        reply.body['desc'] = desc;
                    }
                    _this.sendMsg(reply);
                };
                subs.forEach(function (sub) {
                    sub.callback(msg);
                });
            }
        };
        return MiniBus;
    })();
    exports.MiniBus = MiniBus;
    var Subscription = (function () {
        function Subscription(subscriptions, topic, callback) {
            this._subscriptions = subscriptions;
            this._topic = topic;
            this.callback = callback;
        }
        Subscription.prototype.unsubscribe = function () {
            var subs = this._subscriptions[this._topic];
            if (subs) {
                var index = subs.indexOf(this);
                subs.splice(index, 1);
            }
        };
        return Subscription;
    })();
    exports.Subscription = Subscription;
});
