define(["require", "exports", 'rethink/sync/hyper/Syncher', 'lib/adapter'], function (require, exports, sync, adapter) {
    /// <reference path="es6-promise.d.ts" />
    /// <reference path="MediaStream.d.ts" />
    /// <reference path="RTCPeerConnection.d.ts" />
    var _iceConfig = { iceServers: [{ url: "stun:stun.l.google.com:19302" }] };
    var Direction = {
        OFFER: 'offer',
        ANSWER: 'answer'
    };
    var HypertyP2P = (function () {
        function HypertyP2P(mb) {
            var _this = this;
            this._mb = mb;
            this._syn = new sync.Syncher(mb);
            this._syn.addSchema('Communication', {});
            this._syn.observe(function (request) {
                if (request.cType == sync.CreateType.CREATE_REQ) {
                    if (_this._oncall) {
                        _this._oncall({
                            accept: function () {
                                var obj = request.accept();
                                _this._data = obj.data;
                                obj.observeFilter('offer.candidates.*', function (event) {
                                    _this.addIceCandidate(event.data[0]);
                                });
                                _this.initPC(Direction.ANSWER);
                                var sdp = new RTCSessionDescription({ "type": Direction.OFFER, sdp: obj.data.offer.sdp });
                                _this._pc.setRemoteDescription(sdp);
                                _this._pc.createAnswer(function (desc) {
                                    obj.data.answer = {
                                        sdp: desc.sdp,
                                        candidates: []
                                    };
                                    _this._pc.setLocalDescription(desc);
                                });
                            },
                            reject: function () {
                                request.reject();
                            }
                        });
                    }
                    else {
                        request.reject();
                    }
                }
            });
        }
        Object.defineProperty(HypertyP2P.prototype, "localStream", {
            get: function () {
                return this._localStream;
            },
            enumerable: true,
            configurable: true
        });
        HypertyP2P.prototype.requestMedia = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                adapter.getUserMedia(request, function (stream) {
                    _this._localStream = stream;
                    resolve(stream);
                }, function (error) {
                    reject(error);
                });
            });
        };
        HypertyP2P.prototype.onCall = function (callback) {
            this._oncall = callback;
        };
        HypertyP2P.prototype.onStream = function (callback) {
            this._onstream = callback;
        };
        HypertyP2P.prototype.call = function (to) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.initPC(Direction.OFFER);
                _this._pc.createOffer(function (desc) {
                    var data = {
                        offer: {
                            sdp: desc.sdp,
                            candidates: []
                        }
                    };
                    _this._syn.create(to, 'Communication', to, data).then(function (obj) {
                        _this._data = obj.data;
                        _this._pc.setLocalDescription(desc);
                        obj.observeFilter('answer', function (event) {
                            var sdp = new RTCSessionDescription({ "type": Direction.ANSWER, sdp: obj.data.answer.sdp });
                            _this._pc.setRemoteDescription(sdp);
                        });
                        obj.observeFilter('answer.candidates.*', function (event) {
                            _this.addIceCandidate(event.data[0]);
                        });
                        resolve(true);
                    }).catch(function (error) {
                        resolve(false);
                    });
                });
            });
        };
        HypertyP2P.prototype.initPC = function (direction) {
            var _this = this;
            this._pc = new RTCPeerConnection(_iceConfig);
            this._pc.addStream(this._localStream);
            this._pc.onicecandidate = function (evt) {
                if (evt.candidate != null) {
                    _this._data[direction].candidates.push(evt.candidate);
                }
            };
            this._pc.onaddstream = function (evt) {
                if (_this._onstream) {
                    evt.stream['bind'] = function (element) {
                        var win = window;
                        element.src = win.URL.createObjectURL(evt.stream);
                    };
                    _this._onstream(evt.stream);
                }
            };
        };
        HypertyP2P.prototype.addIceCandidate = function (candidate) {
            var ice = new RTCIceCandidate(candidate);
            this._pc.addIceCandidate(ice, function () { }, function () { });
        };
        return HypertyP2P;
    })();
    exports.default = HypertyP2P;
});
