const net = require('net');
const client = net.createConnection({ host: '128.255.0.2', port: 8124, timeout: 3000 }, () => {
    // 'connect' 监听器
    console.log('已连接到服务器', new Date());
    setInterval(() => {
        client.write('你好世界!\r\n');
    }, 5000);
});
client.on('data', (data) => {
    console.log('data', data.toString());
    // client.end();
});
client.on('end', () => {
    console.log('已从服务器断开');
});
client.on('error', (err) => {
    console.log('err :>> ', err);
    if (err.code === 'ECONNRESET') {
        // retry
        let retryCount = 0;
        let p = setInterval(async () => {
            if (retryCount > 5) {
                throw new Error("Boom!");
            } else {
                try {
                    client.write("重新发送!");
                    clearInterval(p);
                } catch (error) {
                    console.log('retry error :>> ', error);
                }
                retryCount++;
            }
        }, 5000);
    } else {
        throw err;
    }
});

// client.on('timeout', () => {
//     console.log('timeout :>> ', new Date());
// });