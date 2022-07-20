// const getToken = async (url) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('getToken')
//             _t = '123';
//             resolve(url + _t);
//         }, 1000)
//     });
// };

// let token = null

// const request = async (url) => {
//     // if (!token) {
//     token = await getToken(url);
//     // }

//     console.log('token, url :>> ', token, url);
// };

// for (let i = 0; i < 100; i++) {
//     request(i)
// }
let cnt = 0

const helper = (n) => {
    cnt++
    if (n === 1) {
        return 1
    }
    return helper(n - 1) + 1
}

let res = helper(12508)
console.log('cnt :>> ', cnt);
console.log('res :>> ', res);