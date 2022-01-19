import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 }, () => {
  console.log("server started");
});

wss.on("connection", (ws: WebSocket) => {
  ws.on("event1", (...args: []) => {
    console.log("args :>> ", args);
  });
  ws.onmessage = (event) => {
    console.log(`Received message => ${event.data}`);
    event.target.send("Hello! Message From Server!!");
  };
  ws.on("ping", (data: Buffer) => {
    console.log("data.toString() :>> ", data.toString());
    ws.pong("server", false, () => {
      console.log('server :>> ', Date.now());
    })
  });
  ws.on("error", (err) => {
    console.log("err :>> ", err);
  });
  // ws.send("Hello! Message From Server!!");
});