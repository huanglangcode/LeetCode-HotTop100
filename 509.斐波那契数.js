/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let mod = 1e9 + 7
    let a = 0, b = 1, c
    for (let i = 2; i <= n; i++) {
        c = (a + b) % mod
        a = b % mod
        b = c % mod
    }
    console.log('c :>> ', c);
    return c
};
// @lc code=end

fib(100)