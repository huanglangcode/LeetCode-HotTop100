const getToken = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('getToken')
            _t = '123';
            resolve(_t);
        }, 1000)
    });
};

let token = null

const request = async (url) => {
    if (!token) {
        token = await getToken();
    }
    console.log('token, url :>> ', token, url);
};

for (let i = 0; i < 100; i++) {
    request(i)
}