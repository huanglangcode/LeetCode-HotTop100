"use strict";
/* Proxy Descriptor Types */
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
exports.createProxy = exports.registerProxy = exports.isFunction = exports.RequestType = exports.ProxyPropertyType = void 0;
var ProxyPropertyType;
(function (ProxyPropertyType) {
    ProxyPropertyType["Value"] = "value";
    ProxyPropertyType["Function"] = "function";
    ProxyPropertyType["FunctionSync"] = "FunctionSync";
    ProxyPropertyType["FunctionRely"] = "functionRely";
})(ProxyPropertyType = exports.ProxyPropertyType || (exports.ProxyPropertyType = {}));
/* Request Types */
var RequestType;
(function (RequestType) {
    RequestType["Get"] = "get";
    RequestType["Apply"] = "apply";
    RequestType["Sync"] = "Sync";
    RequestType["Reply"] = "Reply";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
function isFunction(value) {
    return value && typeof value === "function";
}
exports.isFunction = isFunction;
var registrations = {};
// step1.注册被需要被代理的类. 监听对应调用
function registerProxy(target, transport) {
    var _this = this;
    //@ts-ignore
    var channel = target.channel;
    // if (registrations[channel]) {
    //     throw new Error(`Proxy object has already been registered on channel ${channel}`);
    // }
    var server = new ProxyServerHandler(target);
    registrations[channel] = server;
    transport.on(channel, function (event, request, correlationId) { return __awaiter(_this, void 0, void 0, function () {
        var sender;
        return __generator(this, function (_a) {
            console.log("event, request,correlationId  :>> ", request, correlationId);
            sender = event.sender;
            server
                .handleRequest(request, sender)
                .then(function (result) {
                // if (!correlationId) {
                //     event.returnValue = result;
                // } else {
                //     if (!sender) {
                //         sender && sender.send(correlationId, result);
                //     } else {
                //         event.send(correlationId, result)
                //     }
                // }
                console.log("correlationId :>> ", correlationId);
                console.log("result :>> ", result);
                var webSocketArgs = JSON.stringify([correlationId, result]);
                sender.send(webSocketArgs);
            })["catch"](function (error) {
                return sender && sender.send(correlationId, { error: error.message });
            });
            return [2 /*return*/];
        });
    }); });
    return function () { return unregisterProxy(channel, transport); };
}
exports.registerProxy = registerProxy;
function unregisterProxy(channel, transport) {
    transport.removeAllListeners(channel);
    registrations[channel] = null;
}
// step2.创建出代理类. 生成一个可以发送事件的对象
function createProxy(target, transport) {
    var result = {};
    Object.getOwnPropertyNames(Object.getPrototypeOf(target)).forEach(function (propKey) {
        if (propKey !== "constructor") {
            var functionType_1 = ProxyPropertyType.Function;
            if (propKey.endsWith(RequestType.Sync)) {
                functionType_1 = ProxyPropertyType.FunctionSync;
            }
            if (propKey.endsWith(RequestType.Reply)) {
                functionType_1 = ProxyPropertyType.FunctionRely;
            }
            Object.defineProperty(result, propKey, {
                enumerable: true,
                get: memoize(function () {
                    return getProperty(functionType_1, propKey, target.channel, transport);
                })
            });
        }
    });
    Object.getOwnPropertyNames(target).forEach(function (propKey) {
        if (propKey !== "channel") {
            Object.defineProperty(result, propKey, {
                enumerable: true,
                get: function () {
                    return getProperty(ProxyPropertyType.Value, propKey, target.channel, transport);
                }
            });
        }
    });
    return result;
}
exports.createProxy = createProxy;
function getProperty(propertyType, propKey, channel, transport) {
    switch (propertyType) {
        case ProxyPropertyType.Value:
            return makeRequest({ type: RequestType.Get, propKey: propKey }, channel, transport);
        case ProxyPropertyType.Function:
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return makeRequest({ type: RequestType.Apply, propKey: propKey, args: args }, channel, transport);
            };
        case ProxyPropertyType.FunctionSync:
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return makeSyncRequest({ type: RequestType.Sync, propKey: propKey, args: args }, channel, transport);
            };
        case ProxyPropertyType.FunctionRely:
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return makeRequest({ type: RequestType.Reply, propKey: propKey, args: args }, channel, transport);
            };
        default:
            throw new Error("getProperty类型错误");
    }
}
function memoize(getter) {
    var result;
    return function () { return (result ? result : (result = getter())); };
}
function makeSyncRequest(request, channel, transport) {
    return transport.sendSync(channel, request);
}
function makeRequest(request, channel, transport) {
    var correlationId = (Math.random() * 100000).toString().slice(6);
    console.log("request, channel, transport :>> ", request, channel, correlationId);
    transport.send(channel, request, correlationId);
    return new Promise(function (resolve, reject) {
        var timer = setTimeout(function () {
            reject("timeout");
        }, 3000);
        transport.once(correlationId, function (response) {
            console.log(" once event response:>> ", response);
            clearTimeout(timer);
            if (!response) {
                resolve(undefined);
            }
            if (response.error) {
                reject(response.error);
            }
            resolve(response);
        });
    });
}
var ProxyServerHandler = /** @class */ (function () {
    function ProxyServerHandler(target) {
        this.target = target;
    }
    ProxyServerHandler.prototype.handleRequest = function (request, sender) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (request.type) {
                    case RequestType.Get:
                        return [2 /*return*/, this.handleGet(request)];
                    case RequestType.Apply:
                    case RequestType.Sync:
                        return [2 /*return*/, this.handleApply(request)];
                    case RequestType.Reply:
                        return [2 /*return*/, this.handleReply(request, sender)];
                    default:
                        throw new Error("handleRequest 类型错误");
                }
                return [2 /*return*/];
            });
        });
    };
    ProxyServerHandler.prototype.handleGet = function (request) {
        return this.target[request.propKey];
    };
    ProxyServerHandler.prototype.handleApply = function (request) {
        var propKey = request.propKey, args = request.args;
        var func = this.target[propKey];
        if (!isFunction(func)) {
            throw new Error("Remote property [" + propKey + "] is not a function");
        }
        return func.apply(this.target, args);
    };
    ProxyServerHandler.prototype.handleReply = function (request, sender) {
        var propKey = request.propKey, args = request.args;
        var func = this.target[propKey];
        if (!isFunction(func)) {
            throw new Error("Remote property [" + propKey + "] is not a function");
        }
        return func.apply(this.target, __spreadArrays(args, [sender]));
    };
    return ProxyServerHandler;
}());
