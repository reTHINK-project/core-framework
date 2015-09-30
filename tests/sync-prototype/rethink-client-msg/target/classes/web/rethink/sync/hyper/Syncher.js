define(["require", "exports", 'rethink/sync/interfaces', 'rethink/sync/hyper/SyncObject'], function (require, exports, inter, sync) {
    exports.CreateType = {
        CREATE_REQ: 'create-req',
        CREATE: 'create',
        DELETE: 'delete'
    };
    var Syncher = (function () {
        function Syncher(mb) {
            var _this = this;
            this._schemas = {};
            this._objs = {};
            this._observers = [];
            this._disableSendChanges = false;
            var self = this;
            this._mb = mb;
            mb.subscribe(Syncher.NAME, function (msg) {
                console.log('RCV: ', msg);
                switch (msg.header.type) {
                    case exports.CreateType.CREATE:
                        _this.fireEvent({
                            rName: msg.body.res,
                            cType: exports.CreateType.CREATE_REQ,
                            owner: msg.header.from,
                            accept: function () {
                                var so = self.createObject(msg.body.res, msg.header.from, msg.body.schema, msg.header.from, msg.body.data);
                                msg.reply(inter.Code.OK);
                                return so;
                            },
                            reject: function () {
                                msg.reply(inter.Code.ERROR, 'Creation rejected');
                            }
                        });
                        break;
                    case exports.CreateType.DELETE:
                        console.log('DELETE-REQ: ', msg);
                        break;
                    default:
                        var objData = _this._objs[msg.body.res];
                        if (objData) {
                            _this.processChange(objData, msg);
                        }
                        else {
                            msg.reply(inter.Code.ERROR, 'Object not found!');
                        }
                }
            });
        }
        Syncher.prototype.addSchema = function (schemaURL, schema) {
            if (this._schemas.hasOwnProperty(schemaURL)) {
                throw 'There is already available schema: ' + schemaURL;
            }
            this._schemas[schemaURL] = schema;
        };
        Syncher.prototype.create = function (resourceName, schemaURL, toURL, data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this._objs.hasOwnProperty(resourceName)) {
                    reject('Already available object: ' + resourceName);
                }
                if (!_this._schemas.hasOwnProperty(schemaURL)) {
                    reject('There is no schema: ' + schemaURL);
                }
                var msg = {
                    header: {
                        "type": exports.CreateType.CREATE,
                        "to": toURL
                    },
                    body: {
                        res: resourceName,
                        schema: schemaURL
                    }
                };
                if (data) {
                    msg.body['data'] = data;
                }
                _this.sendMsg(msg, function (reply) {
                    if (reply.body.code == inter.Code.OK) {
                        var so = _this.createObject(resourceName, _this._mb.owner, schemaURL, toURL, data);
                        resolve(so);
                    }
                    else {
                        reject(reply.body.desc);
                    }
                });
            });
        };
        Syncher.prototype.observe = function (callback) {
            this._observers.push(callback);
        };
        Syncher.prototype.fireEvent = function (event) {
            this._observers.forEach(function (callback) {
                callback(event);
            });
        };
        Syncher.prototype.createObject = function (resourceName, owner, schemaURL, toURL, data) {
            var _this = this;
            var so = new sync.SyncObject(resourceName, owner, schemaURL, data);
            so.observe(function (event) {
                _this.onChange(event);
            });
            this._objs[so.name] = {
                obj: so,
                to: toURL,
                version: 0,
                cQueue: []
            };
            return so;
        };
        Syncher.prototype.processChange = function (objData, msg) {
            if (msg.body.ver) {
                if (msg.body.ver > objData.version) {
                    objData.cQueue[msg.body.ver] = msg;
                }
                else {
                    msg.reply(inter.Code.ERROR, 'Invalid object version!');
                }
                this.processQueue(objData);
            }
            else {
                this.changeObject(objData.obj, msg);
            }
        };
        Syncher.prototype.processQueue = function (objData) {
            var _this = this;
            var nextMsg = objData.cQueue[objData.version + 1];
            if (nextMsg) {
                this.changeObject(objData.obj, nextMsg);
                objData.version++;
                setTimeout(function () {
                    _this.processQueue(objData);
                });
            }
            else {
                console.log('Waiting for version: ' + (objData.version + 1));
            }
        };
        Syncher.prototype.changeObject = function (syncObj, msg) {
            var path = msg.body.attrib;
            var value = msg.body.value;
            var findResult = syncObj.findBefore(path);
            this._disableSendChanges = true;
            if (msg.header.type == sync.ChangeType.UPDATE) {
                findResult.obj[findResult.last] = value;
            }
            else {
                if (msg.header.type == sync.ChangeType.ADD) {
                    if (msg.body.oType == sync.ObjectType.OBJECT) {
                        findResult.obj[findResult.last] = value;
                    }
                    else {
                        var arr = findResult.obj;
                        var index = findResult.last;
                        Array.prototype.splice.apply(arr, [index, 0].concat(value));
                    }
                }
                else {
                    if (msg.body.oType == sync.ObjectType.OBJECT) {
                        delete findResult.obj[findResult.last];
                    }
                    else {
                        var arr = findResult.obj;
                        var index = findResult.last;
                        arr.splice(index, value);
                    }
                }
            }
        };
        Syncher.prototype.onChange = function (event) {
            //console.log(event.objType + '-' + event.cType + ' <<' + event.obj.name + '>> -> ' + event.field + ' = ' + JSON.stringify(event.data));
            if (this._disableSendChanges) {
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
                    res: event.obj.name,
                    oType: event.objType,
                    attrib: event.field,
                    value: event.data
                }
            };
            this.sendMsg(msg);
        };
        Syncher.prototype.sendMsg = function (msg, replyCallback) {
            console.log('SEND: ', msg);
            msg.header.comp = Syncher.NAME;
            this._mb.send(msg, replyCallback);
        };
        Syncher.NAME = 'syncher';
        return Syncher;
    })();
    exports.Syncher = Syncher;
});
