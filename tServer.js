const net = require('net');
const server = net.createServer((c) => {
    // 'connection' 监听器。
    console.log('客户端已连接');
    c.on('end', () => {
        console.log('客户端已断开连接');
    });
    // c.pipe(c);
    c.on("data", (data) => {
        console.log('receive data :>> ', data.toString(), new Date());
        c.write('你好\r\n');
    });
});
server.on('error', (err) => {
    console.log('zzzzzzzzz :>> ', err);
    throw err;
});
server.listen(8124, () => {
    console.log('服务器已启动');
});