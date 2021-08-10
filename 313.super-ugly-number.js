/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    let dp = new Array(n);
    let pointers = new Array(primes.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        let ans = [];
        for (let j = 0; j < primes.length; j++) {
            ans.push(primes[j] * dp[pointers[j]]);
        }
        dp[i] = Math.min(...ans);
        for (let j = 0; j < ans.length; j++) {
            if (dp[i] === ans[j]) {
                pointers[j]++;
            }
        }
    }
    return dp[dp.length - 1];
};
// @lc code=end

nthSuperUglyNumber(12, [2, 7, 13, 19]);