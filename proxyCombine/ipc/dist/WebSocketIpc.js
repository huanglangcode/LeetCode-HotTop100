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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.WebSocketIpc = void 0;
var BaseIpc_1 = require("./BaseIpc");
var log = console;
var WebSocketIpc = /** @class */ (function (_super) {
    __extends(WebSocketIpc, _super);
    function WebSocketIpc(ipcInstance) {
        var _this = _super.call(this, ipcInstance) || this;
        _this.serialize = function (arg) {
            try {
                var res = JSON.stringify(arg);
                return [undefined, res];
            }
            catch (e) {
                return [e, ""];
            }
        };
        _this.unSerialize = function (str) {
            try {
                var res = JSON.parse(str);
                return [undefined, res];
            }
            catch (e) {
                return [e, undefined];
            }
        };
        _this.send = function (channel) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (_this.instance === undefined ||
                _this.instance.send === undefined ||
                _this.instance.send === null) {
                log.error("WebSocketIpc instance don't have send method. instance=", _this.instance);
                return;
            }
            var nargs = [];
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var v = args_1[_a];
                var _b = _this.serialize(v), err = _b[0], res = _b[1];
                if (err !== undefined) {
                    log.error("WebSocketIpc send serialize failed. err=", err);
                    return;
                }
                nargs.push(res);
            }
            // console.log('channel, args, nargs :>> ', channel, args, nargs);
            var webSocketArgs = JSON.stringify(__spreadArrays([channel], args));
            console.log("webSocketArgs :>> ", webSocketArgs);
            _this.instance.send(webSocketArgs);
        };
        _this.sendSync = function (channel) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (_this.instance === undefined ||
                _this.instance.sendSync === undefined ||
                _this.instance.sendSync === null) {
                log.error("WebSocketIpc instance don't have sendSync method. instance=", _this.instance);
                return;
            }
            var nargs = [];
            for (var _b = 0, args_2 = args; _b < args_2.length; _b++) {
                var v = args_2[_b];
                var _c = _this.serialize(v), err = _c[0], res = _c[1];
                if (err !== undefined) {
                    log.error("WebSocketIpc sendSync serialize failed. err=", err);
                    return;
                }
                nargs.push(res);
            }
            return (_a = _this.instance).sendSync.apply(_a, __spreadArrays([channel], nargs));
        };
        _this.on = function (channel, listener) {
            _this.instance.addEventListener("message", function (event) {
                var _a;
                var params = event.data;
                try {
                    params = JSON.parse(params);
                }
                catch (error) { }
                console.log("main data to String :>> ", params);
                (_a = _this.instance).emit.apply(_a, __spreadArrays([params[0]], [{ sender: _this.instance }, params[1], params[2]]));
            });
            // this.instance.on("message", (data: Buffer) => {
            //     let params = data.toString()
            //     try {
            //         params = JSON.parse(params)
            //     } catch (error) { }
            //     console.log('main data to String :>> ', params);
            //     this.instance.emit(params[0], ...[{ sender: this.instance }, params[1], params[2]])
            // })
            _this.instance.on(channel, listener);
        };
        _this.once = function (channel, listener) {
            _this.instance.addEventListener("message", function (event) {
                var params = event.data;
                try {
                    params = JSON.parse(params);
                }
                catch (error) { }
                console.log("renderer data to String :>> ", params);
                _this.instance.emit(params[0], params[1]);
            });
            // this.instance.on("message", (data: Buffer) => {
            //     let params = data.toString()
            //     try {
            //         params = JSON.parse(params)
            //     } catch (error) { }
            //     console.log('renderer data to String :>> ', params);
            //     this.instance.emit(params[0], params[1])
            // })
            _this.instance.once(channel, listener);
        };
        _this.removeAllListeners = function (channel) {
            if (_this.instance === undefined ||
                _this.instance.removeAllListeners === undefined ||
                _this.instance.removeAllListeners === null) {
                log.error("WebSocketIpc instance don't have removeAllListeners  method. instance=", _this.instance);
                return;
            }
            _this.instance.removeAllListeners(channel);
        };
        _this.removeListener = function (channel, listener) {
            if (_this.instance === undefined ||
                _this.instance.removeListener === undefined ||
                _this.instance.removeListener === null) {
                log.error("WebSocketIpc instance don't have removeListener method. instance=", _this.instance);
                return;
            }
            _this.instance.removeListener(channel, listener);
        };
        return _this;
    }
    return WebSocketIpc;
}(BaseIpc_1.BaseIpc));
exports.WebSocketIpc = WebSocketIpc;
// export const WebSocketIpc: ElectronIpc = (() => {
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
