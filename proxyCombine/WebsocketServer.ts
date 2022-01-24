import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer } from "ws";
import { A, a } from "./AController";
import { B, b } from "./BController";
import { BaseIpc } from "./ipc/BaseIpc";
import { registerProxy } from "./ipc/IpcProxy";
import { WebSocketIpc } from "./ipc/WebSocketIpc";

const wss = new WebSocketServer({ port: 3000 }, () => {
  console.log("server started");
});

// let map = {
//   [A.channel]: a,
//   [B.channel]: b,
// };

let set = new Set();

let server: WebSocketIpc;

wss.on("connection", (ws: WebSocket, request: IncomingMessage) => {
  console.log("server , request.url :>> ", server, request.url);
  //   const channel = request.url.split("/")[1];
  //   if (!server) {
  server = new WebSocketIpc(ws);
  //   }
  //   console.log("channel :>> ", channel);
  registerProxy(a, server);
  registerProxy(b, server);
  //   set.add(channel);
});
