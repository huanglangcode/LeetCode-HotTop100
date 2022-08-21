import ReconnectingWebSocket from "reconnecting-websocket";
const rws = new ReconnectingWebSocket("ws://my.site.com");
rws.onmessage = (event) => {
  console.log("event :>> ", event);
};
