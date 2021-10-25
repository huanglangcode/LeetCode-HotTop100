/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0 || divisor === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    let symbol = true
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        symbol = false
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if (dividend < divisor) { return 0 }
    let res = 0
    while (dividend >= divisor) {
        let base = divisor
        let count = 1
        while (base <= (dividend >> 1)) {
            base <<= 1
            count <<= 1
        }
        res += count
        dividend -= base
    }
    return res
};
// @lc code=end
let res = divide(175, 13)
console.log('res :>> ', res);