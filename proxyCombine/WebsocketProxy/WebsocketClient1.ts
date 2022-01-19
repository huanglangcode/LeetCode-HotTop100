import { WebSocket } from "ws";
const url = "ws://localhost:3000";
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send("Message From Client");
  connection.ping("client1", true, (err) => {
    console.log("client1 :>> ", Date.now());
  });
  connection.addListener("event1", (...args: []) => {
    console.log("args :>> ", args);
  });
  connection.emit("event1", [1, 2, 3]);
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error.error}  ${error.message}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};

connection.on("pong", (data: Buffer) => {
  console.log('pong buffer :>> ', data.toString());
})

// connection.on("open", (conn: WebSocket, data: Buffer) => {
//   console.log('conn :>> ', conn);
//   console.log('data :>> ', data);
// })