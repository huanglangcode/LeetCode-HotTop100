import { createProxy } from "./ipc/IpcProxy";
import { WebSocket } from "ws";
import { B, b } from "./BController";
import { WebSocketIpc } from "./ipc/WebSocketIpc";

const url = "ws://localhost:3000";
const connection = new WebSocket(url);

connection.on("open", async () => {
    const client = new WebSocketIpc(connection);
    let proxy = createProxy<B>(b, client);
    console.log('proxy.attr111 :>> ', await proxy.attr);
    await proxy.WCDMA(20016);
    console.log('proxy.attr222 :>> ', await proxy.attr);
    await proxy.funcReply(100)
})

// (async () => {

// })();