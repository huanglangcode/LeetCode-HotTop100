"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ProxyPropertyType = exports.createProxy = void 0;
var common_1 = require("./common");
exports.ProxyPropertyType = common_1.ProxyPropertyType;
function createProxy(descriptor, ObservableCtor, transport) {
    if (ObservableCtor === void 0) { ObservableCtor = null; }
    if (transport === void 0) { transport = ipcRenderer; }
    var result = {};
    Object.keys(descriptor.properties).forEach(function (propKey) {
        var propertyType = descriptor.properties[propKey];
        // Provide feedback if the Observable constructor has not been passed in
        if (propertyType === common_1.ProxyPropertyType.Value$ || propertyType === common_1.ProxyPropertyType.Function$) {
            if (typeof ObservableCtor !== 'function') {
                throw new Error('You must provide an implementation of the Observable constructor if you want to proxy Observables. Please see the docs at https://github.com/frankwallis/electron-ipc-proxy.');
            }
        }
        Object.defineProperty(result, propKey, {
            enumerable: true,
            get: memoize(function () { return getProperty(propertyType, propKey, descriptor.channel, ObservableCtor, transport); })
        });
    });
    return result;
}
exports.createProxy = createProxy;
function getProperty(propertyType, propKey, channel, ObservableCtor, transport) {
    switch (propertyType) {
        case common_1.ProxyPropertyType.Value:
            return makeRequest({ type: common_1.RequestType.Get, propKey: propKey }, channel, transport);
        case common_1.ProxyPropertyType.Value$:
            return makeObservable({ type: common_1.RequestType.Subscribe, propKey: propKey }, channel, ObservableCtor, transport);
        case common_1.ProxyPropertyType.Function:
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return makeRequest({ type: common_1.RequestType.Apply, propKey: propKey, args: args }, channel, transport);
            };
        case common_1.ProxyPropertyType.Function$:
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return makeObservable({ type: common_1.RequestType.ApplySubscribe, propKey: propKey, args: args }, channel, ObservableCtor, transport);
            };
        default:
            throw new Error("null");
    }
}
function memoize(getter) {
    var result = null;
    return function () { return (result ? result : result = getter()); };
}
function makeRequest(request, channel, transport) {
    var correlationId = uuidv4();
    transport.send(channel, request, correlationId);
    return new Promise(function (resolve, reject) {
        transport.once(correlationId, function (event, response) {
            switch (response.type) {
                case common_1.ResponseType.Result:
                    return resolve(response.result);
                case common_1.ResponseType.Error:
                    return reject(Errio.parse(response.error));
                default:
                    return reject(new IpcProxyError("Unhandled response type [" + response.type + "]"));
            }
        });
    });
}
function makeObservable(request, channel, ObservableCtor, transport) {
    return new ObservableCtor(function (obs) {
        var subscriptionId = uuidv4();
        var subscriptionRequest = __assign(__assign({}, request), { subscriptionId: subscriptionId });
        transport.on(subscriptionId, function (event, response) {
            switch (response.type) {
                case common_1.ResponseType.Next:
                    return obs.next(response.value);
                case common_1.ResponseType.Error:
                    return obs.error(Errio.parse(response.error));
                case common_1.ResponseType.Complete:
                    return obs.complete();
                default:
                    return obs.error(new IpcProxyError("Unhandled response type [" + response.type + "]"));
            }
        });
        makeRequest(subscriptionRequest, channel, transport)["catch"](function (err) {
            console.log('Error subscribing to remote observable', err);
            obs.error(err);
        });
        return function () {
            transport.removeAllListeners(subscriptionId);
            makeRequest({ type: common_1.RequestType.Unsubscribe, subscriptionId: subscriptionId }, channel, transport)["catch"](function (err) {
                console.log('Error unsubscribing from remote observale', err);
                obs.error(err);
            });
        };
    });
}
function uuidv4() {
    return (Math.random() * 100000).toString();
}
