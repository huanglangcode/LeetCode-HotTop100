/*
 * @lc app=leetcode id=1289 lang=javascript
 *
 * [1289] Minimum Falling Path Sum II
 */

// @lc code=start
/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function (arr) {
    let n = arr.length;
    let dp = [...new Array(2)].map(_ => new Array(n));
    dp[0] = arr[0];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i & 1][j] = Math.min(...dp[i - 1 & 1].filter((value, idx) => idx !== j)) + arr[i][j];
        }
    }
    return Math.min(...dp[n - 1 & 1]);
};
// @lc code=end

minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);