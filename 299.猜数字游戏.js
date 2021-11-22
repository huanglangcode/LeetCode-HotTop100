/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 * 
你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：
猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls", 公牛），
有多少位属于数字猜对了但是位置不对（称为 "Cows", 奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。
提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。
请注意秘密数字和朋友猜测的数字都可能含有重复数字。
 */
// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let arr = Array(secret.length).fill(0)
    let hash = {}
    let ACount = 0
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            arr[i] = 1
            ACount++
        } else {
            hash[secret[i]] = hash[secret[i]] ? hash[secret[i]] + 1 : 1
        }
    }
    let BCount = 0
    for (let i = 0; i < guess.length; i++) {
        if (arr[i]) continue
        if (hash[guess[i]] > 0) {
            BCount++
            hash[guess[i]]--
        }
    }
    return `${ACount}A${BCount}B`
};
// @lc code=end

var secret = "1234"
var guess = '0111'

let res = getHint(secret, guess)
console.log('res :>> ', res);