const CryptoJS = require("crypto-js"); //引用AES源码js
var AES = require("crypto-js/aes");
const crypto = require('crypto');

const key = CryptoJS.enc.Utf8.parse("TU0JaSzHtSPXhBX2"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("cEPR7YT8cm+Ec8vC"); //十六位十六进制数作为密钥偏移量
// const key = "TU0JaSzHtSPXhBX2"; //十六位十六进制数作为密钥
// const iv = "cEPR7YT8cm+Ec8vC"; //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {
    let decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        padding: CryptoJS.pad.ZeroPadding,
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
}

//加密方法
function Encrypt(word) {
    let ciphertext = AES.encrypt(word, key, {
        iv: iv,
        padding: CryptoJS.pad.ZeroPadding,
    }).toString();
    console.log("================");
    console.log(word);
    console.log(ciphertext);
    console.log("================");
    return ciphertext;
}

const data = "admin";
let res = Encrypt(data);
let result = Decrypt(res);
console.log(result);