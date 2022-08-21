// let ReconnectingWebSocket = require("reconnecting-websocket");

// if (ReconnectingWebSocket.default) {
//   ReconnectingWebSocket = ReconnectingWebSocket.default;
// }

// const rws = new ReconnectingWebSocket("ws://localhost:3000");

// rws.addEventListener("open", () => {
//   rws.send("hello!");
// });

/**
 * let p = new Proxy(target, handler);
参数
target
用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler
一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * 
 */

import ReconnectingWebSocket, { Options } from "reconnecting-websocket";
import WS from "ws";

let failedCnt = 0;

const options: Options = {
  WebSocket: WS, // custom WebSocket constructor
  connectionTimeout: 1000,
  maxRetries: 3,
  reconnectionDelayGrowFactor: 1.3,
};
let rws = new ReconnectingWebSocket("ws://localhost:3000", [], options);
rws.onopen = (event) => {
  failedCnt = 0;
  console.log("opened :>> ", event.type);
  rws.send("hello world");
};

const eventHandler = (event) => {
  failedCnt++;
  if (failedCnt > options.maxRetries) {
    process.exit();
  }
  console.log("onclose. :>> ", JSON.stringify(event));
  rws.removeEventListener("close", eventHandler);
};

rws.onclose = eventHandler;
