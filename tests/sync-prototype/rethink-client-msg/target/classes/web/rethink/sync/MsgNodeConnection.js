define(["require", "exports", 'cdn/sockjs'], function (require, exports, SockJS) {
    var MsgNodeConnection = (function () {
        function MsgNodeConnection(msgNodeURL) {
            this._sock = null;
            this._msgCallback = null;
            this._msgNodeURL = msgNodeURL;
        }
        Object.defineProperty(MsgNodeConnection.prototype, "serverURL", {
            get: function () {
                return this._msgNodeURL;
            },
            enumerable: true,
            configurable: true
        });
        MsgNodeConnection.prototype.send = function (msg) {
            var _this = this;
            this.open(function () {
                _this._sock.send(JSON.stringify(msg));
            });
        };
        MsgNodeConnection.prototype.onMessage = function (callback) {
            this._msgCallback = callback;
        };
        MsgNodeConnection.prototype.close = function () {
            if (this._sock != null) {
                this._sock.close();
            }
        };
        MsgNodeConnection.prototype.waitReady = function (callback) {
            var _this = this;
            if (this._sock.readyState == 1) {
                callback();
            }
            else {
                setTimeout(function () {
                    _this.waitReady(callback);
                });
            }
        };
        MsgNodeConnection.prototype.open = function (callback) {
            var _this = this;
            if (this._sock == null) {
                if (this._msgNodeURL.substring(0, 2) == 'ws') {
                    this._sock = new WebSocket(this._msgNodeURL);
                }
                else {
                    this._sock = new SockJS(this._msgNodeURL);
                }
                this._sock.onopen = function () {
                    console.log('OPEN');
                    callback();
                };
                this._sock.onmessage = function (e) {
                    var msg = JSON.parse(e.data);
                    if (_this._msgCallback != null)
                        _this._msgCallback(msg);
                };
                this._sock.onclose = function () {
                    console.log('CLOSE');
                    _this._sock = null;
                };
            }
            else {
                this.waitReady(callback);
            }
        };
        return MsgNodeConnection;
    })();
    exports.default = MsgNodeConnection;
});
