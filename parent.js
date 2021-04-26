var spawn = require('child_process').spawn;
var child = spawn('node', ['child.js']);

setInterval(function(){
    child.stdin.write("console.log('Hey there')\n");
}, 1000);

child.stdout.on('data', function(data){
    console.log('data :>> ', data);
    console.log(data.toString());
});

const repl = require("repl");

const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org/', {
  origin: 'https://websocket.org'
});

const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);

repl.start({})
