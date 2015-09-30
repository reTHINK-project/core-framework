define(["require", "exports"], function (require, exports) {
    exports.ChangeType = {
        UPDATE: 'update',
        ADD: 'add',
        REMOVE: 'remove'
    };
    exports.ObjectType = {
        OBJECT: 'object',
        ARRAY: 'array'
    };
    var SyncObject = (function () {
        function SyncObject(name, owner, schema, data) {
            this._observers = [];
            this._filters = {};
            this._name = name;
            this._owner = owner;
            this._url = SyncObject.URL(owner, name);
            this._schema = schema;
            if (data) {
                this._data = data;
            }
            else {
                this._data = {};
            }
            this.internalObserve(new Path(), this.data);
        }
        SyncObject.URL = function (resOwner, resName) {
            return resOwner + '/' + resName;
        };
        Object.defineProperty(SyncObject.prototype, "name", {
            get: function () { return this._name; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SyncObject.prototype, "owner", {
            get: function () { return this._owner; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SyncObject.prototype, "url", {
            get: function () { return this._url; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SyncObject.prototype, "schema", {
            get: function () { return this._schema; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SyncObject.prototype, "data", {
            get: function () { return this._data; },
            enumerable: true,
            configurable: true
        });
        SyncObject.prototype.observe = function (callback) {
            this._observers.push(callback);
        };
        SyncObject.prototype.observeFilter = function (filter, callback) {
            var key = filter;
            var filterObj = {
                "type": FilterType.EXACT,
                callback: callback
            };
            if (filter.indexOf('*') == filter.length - 1) {
                filterObj.type = FilterType.START;
                key = filter.substr(0, filter.length - 1);
            }
            this._filters[key] = filterObj;
        };
        SyncObject.prototype.find = function (path) {
            var list = path.split('.');
            return this.findWithSplit(list);
        };
        SyncObject.prototype.findBefore = function (path) {
            var result = {};
            var list = path.split('.');
            result.last = list.pop();
            result.obj = this.findWithSplit(list);
            return result;
        };
        SyncObject.prototype.findWithSplit = function (list) {
            var obj = this._data;
            list.forEach(function (value) {
                obj = obj[value];
            });
            return obj;
        };
        SyncObject.prototype.fireEvent = function (event) {
            var _this = this;
            Object.keys(this._filters).forEach(function (key) {
                var filter = _this._filters[key];
                if (filter.type == FilterType.START) {
                    if (event.field.indexOf(key) == 0) {
                        filter.callback(event);
                    }
                }
                else if (filter.type == FilterType.EXACT) {
                    if (event.field == key) {
                        filter.callback(event);
                    }
                }
            });
            this._observers.forEach(function (callback) {
                callback(event);
            });
        };
        SyncObject.prototype.isObservable = function (obj) {
            if (obj.constructor === Object || obj.constructor === Array)
                return true;
            return false;
        };
        SyncObject.prototype.internalObserve = function (path, obj) {
            var _this = this;
            if (this.isObservable(obj)) {
                var handler = function (changes) {
                    _this.onChanges(path, changes);
                };
                if (obj.constructor === Object) {
                    Object.observe(obj, handler);
                    for (var prop in obj) {
                        if (this.isObservable(obj[prop])) {
                            this.internalObserve(path.new(prop), obj[prop]);
                        }
                    }
                }
                else if (obj.constructor === Array) {
                    Array.observe(obj, handler);
                    for (var prop in obj) {
                        if (this.isObservable(obj[prop])) {
                            this.internalObserve(path.new(new ArrayIndex(obj[prop], prop)), obj[prop]);
                        }
                    }
                }
            }
        };
        SyncObject.prototype.onChanges = function (path, changes) {
            var _this = this;
            for (var i in changes) {
                var obj = changes[i].object;
                var objType;
                if (obj.constructor == Object)
                    objType = exports.ObjectType.OBJECT;
                if (obj.constructor == Array)
                    objType = exports.ObjectType.ARRAY;
                if (changes[i].type === 'splice') {
                    var idx = changes[i].index;
                    var field = path.new('' + idx);
                    var removeSize = changes[i].removed.length;
                    if (removeSize != 0) {
                        var removeValues = changes[i].removed;
                        this.fireEvent({
                            obj: this,
                            cType: exports.ChangeType.REMOVE,
                            objType: objType,
                            field: field.toString(),
                            data: removeSize
                        });
                        removeValues.forEach(function (value, index) {
                            if (_this.isObservable(value)) {
                                path.removeIndex(idx + index);
                            }
                        });
                    }
                    var addSize = changes[i].addedCount;
                    if (addSize != 0) {
                        var addValues = obj.slice(idx, idx + addSize);
                        this.fireEvent({
                            obj: this,
                            cType: exports.ChangeType.ADD,
                            objType: objType,
                            field: field.toString(),
                            data: deepClone(addValues)
                        });
                        addValues.forEach(function (value, index) {
                            if (_this.isObservable(value)) {
                                _this.internalObserve(path.new(new ArrayIndex(value, idx + index)), value);
                            }
                        });
                    }
                    if (idx != obj.length - 1)
                        path.reIndexFrom(obj);
                }
                else {
                    var field = path.new(changes[i].name);
                    var newValue = obj[changes[i].name];
                    if (changes[i].type === 'update') {
                        this.fireEvent({
                            obj: this,
                            cType: exports.ChangeType.UPDATE,
                            objType: objType,
                            field: field.toString(),
                            data: deepClone(newValue)
                        });
                    }
                    if (changes[i].type === 'add') {
                        this.fireEvent({
                            obj: this,
                            cType: exports.ChangeType.ADD,
                            objType: objType,
                            field: field.toString(),
                            data: deepClone(newValue)
                        });
                        this.internalObserve(field, newValue);
                    }
                    if (changes[i].type === 'delete') {
                        this.fireEvent({
                            obj: this,
                            cType: exports.ChangeType.REMOVE,
                            objType: objType,
                            field: field.toString()
                        });
                    }
                }
            }
        };
        return SyncObject;
    })();
    exports.SyncObject = SyncObject;
    var FilterType = {
        START: 'start',
        EXACT: 'exact'
    };
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    var Path = (function () {
        function Path() {
            this._path = [];
            this._observables = {};
        }
        Path.prototype.removeIndex = function (idx) {
            delete this._observables[idx];
        };
        Path.prototype.reIndexFrom = function (array) {
            var _this = this;
            Object.keys(this._observables).forEach(function (key) {
                var arrayIndex = _this._observables[key];
                var idx = array.indexOf(arrayIndex.obj);
                if (arrayIndex.idx != idx) {
                    arrayIndex.idx = idx;
                    delete _this._observables[key];
                    _this._observables[idx] = arrayIndex;
                }
            });
        };
        Path.prototype.new = function (idx) {
            if (idx.constructor == ArrayIndex) {
                this._observables[idx.idx] = idx;
            }
            var nPath = this.clone();
            nPath._path.push(idx);
            return nPath;
        };
        Path.prototype.clone = function () {
            var nPath = new Path();
            this._path.forEach(function (value) {
                nPath._path.push(value);
            });
            return nPath;
        };
        Path.prototype.toString = function () {
            var str = '';
            this._path.forEach(function (value, index) {
                if (index == 0) {
                    str = value.toString();
                }
                else {
                    str += '.' + value.toString();
                }
            });
            return str;
        };
        return Path;
    })();
    var ArrayIndex = (function () {
        function ArrayIndex(obj, idx) {
            this.obj = obj;
            this.idx = idx;
        }
        ArrayIndex.prototype.toString = function () {
            return this.idx.toString();
        };
        return ArrayIndex;
    })();
});
