/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    //  2 ^ 10 = 4 ^ 5 = 4 * 16 ^ 2 = 256 * 4
    const helper = (v, pow) => {
        if (pow === 0) return 1;
        return pow % 2 === 0 ? helper(v * v, pow / 2) : helper(v * v, (pow - 1) / 2) * v;
    }
    const result = helper(x, Math.abs(n))
    return n < 0 ? 1 / result : result;
};
// @lc code=end
let res = myPow(2, -2)
console.log('res :>> ', res);
