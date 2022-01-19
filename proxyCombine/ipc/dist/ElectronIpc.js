"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ElectronIpc = void 0;
var BaseIpc_1 = require("./BaseIpc");
var log = console;
var ElectronIpc = /** @class */ (function (_super) {
    __extends(ElectronIpc, _super);
    function ElectronIpc(ipcInstance) {
        var _this = _super.call(this, ipcInstance) || this;
        _this.serialize = function (arg) {
            try {
                var res = JSON.stringify(arg);
                return [undefined, res];
            }
            catch (e) {
                return [e, ""];
            }
            // 经测试， msgpack 不能处理 undefined，array中有undefined也会挂
            // if (arg === undefined || arg === null) {
            //    return arg;
            // }
            // return msgpack.encode(arg);
        };
        _this.unSerialize = function (str) {
            try {
                var res = JSON.parse(str);
                return [undefined, res];
            }
            catch (e) {
                return [e, undefined];
            }
            // 经测试， msgpack 不能处理 undefined，array中有undefined也会挂
            // if (str === undefined || str === null) {
            //    return str;
            // }
            // return msgpack.decode(str);
        };
        _this.send = function (channel) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (_this.instance === undefined || _this.instance.send === undefined || _this.instance.send === null) {
                log.error("SerializedIpc instance don't have send method. instance=", _this.instance);
                return;
            }
            var nargs = [];
            for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
                var v = args_1[_b];
                var _c = _this.serialize(v), err = _c[0], res = _c[1];
                if (err !== undefined) {
                    log.error("SerializedIpc send serialize failed. err=", err);
                    return;
                }
                nargs.push(res);
            }
            if (!(channel === "package" && process.env.NODE_ENV === "production")) {
                log.debug("serialized ipc send:", channel, nargs);
            }
            (_a = _this.instance).send.apply(_a, __spreadArrays([channel], nargs));
        };
        _this.sendSync = function (channel) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (_this.instance === undefined || _this.instance.sendSync === undefined || _this.instance.sendSync === null) {
                log.error("SerializedIpc instance don't have sendSync method. instance=", _this.instance);
                return;
            }
            var nargs = [];
            for (var _b = 0, args_2 = args; _b < args_2.length; _b++) {
                var v = args_2[_b];
                var _c = _this.serialize(v), err = _c[0], res = _c[1];
                if (err !== undefined) {
                    log.error("SerializedIpc sendSync serialize failed. err=", err);
                    return;
                }
                nargs.push(res);
            }
            return (_a = _this.instance).sendSync.apply(_a, __spreadArrays([channel], nargs));
        };
        _this.on = function (channel, listener) {
            if (_this.instance === undefined || _this.instance.on === undefined || _this.instance.on === null) {
                log.error("SerializedIpc instance don't have on method. instance=", _this.instance);
                return;
            }
            var wrapped = _this.getWrappedListener(channel, false, _this, listener);
            _this.instance.on(channel, wrapped);
        };
        _this.once = function (channel, listener) {
            if (_this.instance === undefined || _this.instance.once === undefined || _this.instance.once === null) {
                log.error("SerializedIpc instance don't have once method. instance=", _this.instance);
                return;
            }
            var wrapped = _this.getWrappedListener(channel, true, _this, listener);
            _this.instance.on(channel, wrapped);
        };
        _this.removeAllListeners = function (channel) {
            if (_this.instance === undefined || _this.instance.removeAllListeners === undefined || _this.instance.removeAllListeners === null) {
                log.error("SerializedIpc instance don't have removeAllListeners  method. instance=", _this.instance);
                return;
            }
            _this.instance.removeAllListeners(channel);
        };
        _this.removeListener = function (channel, listener) {
            if (_this.instance === undefined || _this.instance.removeListener === undefined || _this.instance.removeListener === null) {
                log.error("SerializedIpc instance don't have removeListener method. instance=", _this.instance);
                return;
            }
            _this.instance.removeListener(channel, listener);
        };
        if (ipcInstance === undefined || ipcInstance === null) {
            log.error("SerializedIpc got constructor parameter undefined|null");
            return _this;
        }
        _this.instance = ipcInstance;
        return _this;
    }
    ElectronIpc.prototype.getWrappedListener = function (eventName, once, target, listener) {
        var state = { fired: false, eventName: eventName, listener: listener, once: once, target: target, serializedIpc: this };
        // Nodejs.EventEmitter uses wrapper.listener to handle wrapping. See https://github.com/nodejs/node/blob/eabe22b73371e59838f5ff501804aca3aae9f4a9/lib/events.js#L428
        var wrapped = wrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
    };
    return ElectronIpc;
}(BaseIpc_1.BaseIpc));
exports.ElectronIpc = ElectronIpc;
function wrapper() {
    return __awaiter(this, arguments, void 0, function () {
        var _a, e, args, nargs, _i, args_3, v, _b, err, res, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.once && this.fired) {
                        return [2 /*return*/];
                    }
                    if (this.once && this.wrapFn !== undefined) {
                        this.serializedIpc.removeListener(this.eventName, this.wrapFn);
                        this.fired = true;
                    }
                    _a = __spreadArrays(arguments), e = _a[0], args = _a.slice(1);
                    nargs = [];
                    for (_i = 0, args_3 = args; _i < args_3.length; _i++) {
                        v = args_3[_i];
                        _b = this.serializedIpc.unSerialize(v), err = _b[0], res = _b[1];
                        if (err !== undefined) {
                            // log.error("SerializedIpc on unSerialize failed. err=", err, ", v=", v);
                            nargs.push(v);
                        }
                        else {
                            nargs.push(res);
                        }
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, this.listener.apply(this.target, __spreadArrays([e], nargs))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    log.error("run ipc listener catch exception, event name=", this.eventName, "e=", e_1.toString());
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// export const serializedIpc: ElectronIpc = (() => {
//     if (isWeb()) {
//         log.info("isWeb, init serialized ipc with empty");
//         return new ElectronIpc({});
//     } else if (isNode()) {
//         const { ipcMain } = require("electron");
//         log.info("isNode, init serialized ipc with ipcMain");
//         return new ElectronIpc(ipcMain);
//     } else if (isRenderer()) {
//         const { ipcRenderer } = require("electron");
//         log.info("isRenderer, init serialized ipc with ipcRender");
//         return new ElectronIpc(ipcRenderer);
//     } else {
//         const { ipcMain } = require("electron");
//         log.info("isMain, init serialized ipc with ipcMain");
//         return new ElectronIpc(ipcMain);
//     }
// })();
