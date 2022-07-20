/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let res = 0, idx = 0, last = 30
    while (n > 0) {
        if ((n & 1) === 1) {
            res = Math.max(res, idx - last)
            last = idx
        }
        n >>= 1
        idx++
    }
    return res
};
// @lc code=end

var n = 8

let q = binaryGap(n)
console.log('res :>> ', q);
