var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bg;
(function (bg) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super.call(this) || this;
            _this._sm = bg.SceneManage.ins;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this._onAdd, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this._onRemove, _this);
            _this._evtPoll = {};
            return _this;
        }
        Scene.prototype.bind = function (type, callback) {
            bg.MessageCenter.add(type, callback, this);
            this._evtPoll[type] = callback;
        };
        Scene.prototype.unbind = function (type, callback) {
            bg.MessageCenter.remove(type, callback, this);
        };
        Scene.prototype.unbindAll = function () {
            for (var key in this._evtPoll) {
                this.unbind(key, this._evtPoll[key]);
            }
        };
        Scene.prototype.onAdd = function () {
        };
        Scene.prototype.onRemove = function () {
        };
        Scene.prototype._onAdd = function (e) {
            this.onAdd();
        };
        Scene.prototype._onRemove = function (e) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onAdd, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemove, this);
            this.unbindAll();
            this.onRemove();
        };
        return Scene;
    }(eui.Component));
    bg.Scene = Scene;
    __reflect(Scene.prototype, "bg.Scene");
})(bg || (bg = {}));
//# sourceMappingURL=Scene.js.map