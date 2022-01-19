import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer } from "ws";
import { A, a } from "./AController";
import { B, b } from "./BController";
import { registerProxy } from "./ipc/IpcProxy";
import { WebSocketIpc } from "./ipc/WebSocketIpc";


const wss = new WebSocketServer({ port: 3000 }, () => {
    console.log('server started');
});

let map = {
    [A.channel]: a,
    [B.channel]: b
}

let set = new Set()

wss.on("connection", (ws: WebSocket, request: IncomingMessage) => {
    const channel = request.url.split('/')[1]
    if (set.has(channel)) {
        console.log('already connected :>> ', channel);
    } else {
        console.log('channel :>> ', channel);
        const server = new WebSocketIpc(ws)
        registerProxy(map[channel], server);
        set.add(channel)
    }
});