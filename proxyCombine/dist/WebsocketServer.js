"use strict";
var _a;
exports.__esModule = true;
var ws_1 = require("ws");
var AController_1 = require("./AController");
var BController_1 = require("./BController");
var IpcProxy_1 = require("./ipc/IpcProxy");
var WebSocketIpc_1 = require("./ipc/WebSocketIpc");
var wss = new ws_1.WebSocketServer({ port: 3000 }, function () {
    console.log('server started');
});
var map = (_a = {},
    _a[AController_1.A.channel] = AController_1.a,
    _a[BController_1.B.channel] = BController_1.b,
    _a);
var set = new Set();
wss.on("connection", function (ws, request) {
    var channel = request.url.split('/')[1];
    if (set.has(channel)) {
        console.log('already connected :>> ', channel);
    }
    else {
        console.log('channel :>> ', channel);
        var server = new WebSocketIpc_1.WebSocketIpc(ws);
        IpcProxy_1.registerProxy(map[channel], server);
        set.add(channel);
    }
});
