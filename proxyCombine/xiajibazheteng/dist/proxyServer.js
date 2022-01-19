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
exports.__esModule = true;
exports.aa = exports.a = exports.AA = exports.A = void 0;
var events_1 = require("events");
var SerializedIpc_1 = require("./SerializedIpc");
var proxy_1 = require("./proxy");
var B = /** @class */ (function () {
    function B(channel) {
        this.channel = channel;
    }
    B.prototype.B = function () {
        console.log('this is B :>> ', B.name);
    };
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        var _this = _super.call(this, A.name) || this;
        _this.attr = 1;
        _this.attr2 = 200;
        return _this;
    }
    A.prototype.CMCC = function () {
        console.log('.....10086.....');
        return 10086;
    };
    A.prototype.WCDMA = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('.....10010.....', this.attr);
                this.attr++;
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { resolve(num); }, 1); })];
            });
        });
    };
    A.prototype.CDMA = function (callback) {
        console.log('.....10000.....');
        for (var i = 0; i < 10; i++) {
            callback("event number: " + i);
        }
        return 10000;
    };
    A.prototype.Func1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) { return setTimeout(resolve, 2000); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    A.channel = A.name;
    return A;
}(B));
exports.A = A;
var AA = /** @class */ (function (_super) {
    __extends(AA, _super);
    function AA() {
        var _this = _super.call(this, AA.name) || this;
        _this.attr = 1;
        return _this;
    }
    AA.prototype.CCC = function () {
        console.log('111111 :>> ', 111111);
        return 1111;
    };
    AA.prototype.CMCC2 = function () {
        console.log('.....10086.....');
        return 10086;
    };
    AA.prototype.WCDMA2 = function () {
        console.log('.....10010.....');
        return 10010;
    };
    AA.prototype.CDMA2 = function () {
        console.log('.....10000.....');
        return 10000;
    };
    AA.prototype.Func2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) { return setTimeout(resolve, 2000); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AA.channel = AA.name;
    return AA;
}(B));
exports.AA = AA;
exports.a = new A();
exports.aa = new AA();
// console.log('Object getOwnPropertyNames :>> ', Object.getOwnPropertyNames(AA));
// console.log('111 :>> ', Object.getOwnPropertyNames(AA.prototype));
// console.log('222 :>> ', Object.getPrototypeOf(AA));
// console.log('333 :>> ', B.isPrototypeOf(AA));
// Object.getOwnPropertyNames(A.prototype).forEach(ele => console.log('A. :>> ', A.prototype[ele], typeof A.prototype[ele]));
// Object:>> ['constructor', 'CMCC', 'WCDMA', 'CDMA']
// 默认搞个server端玩玩
var eventHandler = new events_1.EventEmitter();
var server = new SerializedIpc_1.SerializedIpc(eventHandler);
proxy_1.registerProxy(exports.a, server);
// registerProxy(aa, eventHandler);
