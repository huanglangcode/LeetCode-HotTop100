/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// 从 src出发 经k次中转. 到达j处所需的最少money
var findCheapestPrice = function (n, flights, src, dst, k) {
    let dp = [...Array(k + 1)].map(_ => Array(n).fill(Infinity))
    for (let i = 0; i <= k; i++) {
        dp[i][src] = 0
    }
    for (const f of flights) {
        if (f[0] === src) {
            dp[0][f[1]] = f[2]
        }
    }
    for (let i = 1; i <= k; i++) {
        for (const [from, to, price] of flights) {
            if (dp[i - 1][from] !== Infinity) {
                dp[i][to] = Math.min(dp[i - 1][to], dp[i - 1][from] + price, dp[i][to])
            }
        }
    }
    return dp[k][dst] === Infinity ? -1 : dp[k][dst]
};
// @lc code=end