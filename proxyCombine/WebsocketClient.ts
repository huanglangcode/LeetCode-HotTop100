import { createProxy } from "./ipc/IpcProxy";
import { WebSocket } from "ws";
import { A, a } from "./AController";
import { WebSocketIpc } from "./ipc/WebSocketIpc";

const url = `ws://localhost:3000/${A.channel}`;
const connection = new WebSocket(url);

connection.on("open", async () => {
    const client = new WebSocketIpc(connection);
    let proxy = createProxy<A>(a, client);
    // console.log('proxy.attr111 :>> ', await proxy.attr);
    let res = await proxy.WCDMA(20016);
    console.log('res :>> ', res);
    // console.log('proxy.attr222 :>> ', await proxy.attr);
    // await proxy.funcReply(100)
})

// (async () => {

// })();