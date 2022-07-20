/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    if (n === 1) {
        return 1
    }
    return n * trailingZeroes(n - 1)
};
// @lc code=end
/**
 * 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20*21*22*23*24*25*26*27*28*29*30
 */
// 105 25
// 5  1
// 10 2
// 15 3
// 20 4
// 25 5
// 30 7
// 35 8
// 40 8
let r = trailingZeroes(20)
console.log('r :>> ', r);