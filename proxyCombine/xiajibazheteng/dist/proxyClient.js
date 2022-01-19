"use strict";
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
exports.__esModule = true;
var events_1 = require("events");
var SerializedIpc_1 = require("./SerializedIpc");
var proxy_1 = require("./proxy");
var proxyServer_1 = require("./proxyServer");
// 默认搞个server端玩玩
var eventHandler = new events_1.EventEmitter();
var client = new SerializedIpc_1.SerializedIpc(eventHandler);
var proxy = proxy_1.createProxy(proxyServer_1.a, client);
// let proxy2 = createProxy<AA>(aa);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                // await proxy.WCDMA(10016);
                _b = (_a = console).log;
                _c = ['proxy.attr111 :>> '];
                return [4 /*yield*/, proxy.attr];
            case 1:
                // await proxy.WCDMA(10016);
                _b.apply(_a, _c.concat([_g.sent()]));
                return [4 /*yield*/, proxy.WCDMA(20016)];
            case 2:
                _g.sent();
                // await proxy.WCDMA(30016);
                _e = (_d = console).log;
                _f = ['proxy.attr222 :>> '];
                return [4 /*yield*/, proxy.attr];
            case 3:
                // await proxy.WCDMA(30016);
                _e.apply(_d, _f.concat([_g.sent()]));
                return [2 /*return*/];
        }
    });
}); })();
// (async () => {
//     return proxy2.CDMA2();
// })();
