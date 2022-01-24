import { WebSocket } from "ws";
const url = "ws://localhost:3000";
const connection = new WebSocket(url);

connection.on("pong", (data: Buffer) => {
  console.log("pong buffer :>> ", data.toString());
  // let now = Date.now();
  // connection.ping(now);
});

connection.onopen = () => {
  connection.send("Message From Client");
  // connection.ping("ping data", true, (err) => {
  //   if (err) {
  //     console.log("ping err :>> ", err);
  //   } else {
  //     console.log("ping succ :>> ");
  //   }
  // });
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error.error}  ${error.message}`);
};

connection.onmessage = (e) => {
  console.log("receive message:", e.data);
};

// connection.on("open", (conn: WebSocket, data: Buffer) => {
//   console.log('conn :>> ', conn);
//   console.log('data :>> ', data);
// })
