/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
示例 1:
输入: num = 100
输出: "202"
示例 2:
输入: num = -7
输出: "-10"
提示：
-107 <= num <= 107
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let res = ''
    let coped = num
    if (coped < 0) {
        coped = -coped
    }
    while (coped > 0) {
        const yu = coped % 7
        coped = Math.floor(coped / 7)
        res = yu + res
    }
    return num < 0 ? `-${res}` : res
    // 十进制的 100 七进制的 202
    // 100 / 7  = 14 / 2  14 / 7 = 2
    // 逢 7 进 1
    // 100 -> 14 个 7 余 2
    // 1 2 3 4 5 6 10 11 12 13 14 15 16 20......    60  .... 100
    // ...............                                 200
    // 2
};
// @lc code=end

var num = 102354
let r = convertToBase7(num)
console.log('r :>> ', r);