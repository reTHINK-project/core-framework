define(["require", "exports"], function (require, exports) {
    function byId(id) {
        return document.getElementById(id);
    }
    exports.byId = byId;
});
