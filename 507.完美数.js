/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。
给定一个 整数 n， 如果是完美数，返回 true，否则返回 false

示例 1：
输入：num = 28
输出：true
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。

 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 1) return false;
    let ans = 1;
    for (let i = 2; i <= num / i; i++) {
        if (num % i === 0) {
            ans += i;
            if (i * i !== num) ans += num / i;
        }
    }
    return ans == num;

};
// @lc code=end

let r = checkPerfectNumber(28)
console.log('r :>> ', r);