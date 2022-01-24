import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 }, () => {
  console.log("server started");
});

wss.on("connection", (ws: WebSocket, req: IncomingMessage) => {
  console.log("req.url :>> ", req.url);
  ws.onmessage = (event) => {
    console.log(`Received message => ${event.data}`);
    event.target.send("Hello! Message From Server!!");
  };

  setInterval(() => {
    ws.pong(Date.now(), false, (err) => {
      console.log("err :>> ", err);
    });
  }, 5000);
  // ws.on("ping", async (data: Buffer) => {
  //   console.log("data.toString() :>> ", data.toString());
  //   // setTimeout(() => {
  //   //   ws.pong(data.toString());
  //   // }, 5000);
  // });
  ws.on("error", (err) => {
    console.log("err :>> ", err);
  });
  // ws.send("Hello! Message From Server!!");
  ws.on("close", (code: number, reason: Buffer) => {
    console.log("code, reason >> ", code, reason.toString());
    wss.close((err) => {
      console.log("close err :>> ", err);
      process.exit(0);
    });
  });
});

wss.on("close", () => {
  console.log("connection closed :>> ");
});
