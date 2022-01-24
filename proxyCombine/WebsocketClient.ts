import { createProxy } from "./ipc/IpcProxy";
import { WebSocket } from "ws";
import { A, a } from "./AController";
import { B, b } from "./BController";
import { WebSocketIpc } from "./ipc/WebSocketIpc";

const url = `ws://localhost:3000/${A.channel}`;
const connection = new WebSocket(url);

let client: WebSocketIpc | null;

// connection.on("open", async () => {
//   if (!client) {
//     client = new WebSocketIpc(connection);
//   }
//   let proxy = createProxy<A>(a, client);
//   // console.log('proxy.attr111 :>> ', await proxy.attr);
//   let res = await proxy.WCDMA(20016);
//   console.log("res :>> ", res);
//   // console.log('proxy.attr222 :>> ', await proxy.attr);
//   // await proxy.funcReply(100)
// });

// (async () => {

// })();

connection.onopen = async (event) => {
  console.log("event.type :>> ", event.type);
  if (!client) {
    client = new WebSocketIpc(event.target);
  }
  let proxy = createProxy<A>(a, client);
  let proxy2 = createProxy<B>(b, client);
  // console.log('proxy.attr111 :>> ', await proxy.attr);
  let res = await proxy.WCDMA(20016);
  console.log("res :>> ", res);

  let res2 = await proxy2.WCDMA(1000);
  console.log("res2 :>> ", res2);
};
