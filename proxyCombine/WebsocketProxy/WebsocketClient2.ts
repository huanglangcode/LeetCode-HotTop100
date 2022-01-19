import { WebSocket } from "ws";
const url = "ws://localhost:3000";
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send("Message From Client");
  connection.ping("client2", true, (err) => {
    console.log("client2 :>> ", Date.now());
  });
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};
