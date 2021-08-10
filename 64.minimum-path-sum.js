/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length;
    let dp = [...new Array(m)].map(_ => new Array(n));
    dp[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && j > 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            } else if (i > 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else if (j > 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            }
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);