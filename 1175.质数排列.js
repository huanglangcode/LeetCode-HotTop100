/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    const MOD = BigInt(1e9 + 7)
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    let p = 0
    for (let i = 1; i <= n; i++) {
        if (primes.has(i)) p++
    }
    let res = 1n
    for (let i = 2n; i <= p; i++) {
        res *= i
    }
    for (let i = 2n; i <= n - p; i++) {
        res *= i
    }
    return res % MOD
};
// @lc code=end

var n = 100

let res = numPrimeArrangements(n)
console.log('res :>> ', res);

// 682289015