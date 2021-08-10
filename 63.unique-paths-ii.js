/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (!obstacleGrid.length || !obstacleGrid[0].length || obstacleGrid[0][0] === 1) {
        return 0;
    }
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = [...new Array(m)].map(_ => new Array(n));
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0;
            while (i < m) {
                dp[i++][0] = 0;
            }
        } else {
            dp[i][0] = 1;
        }
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            while (j < n) {
                dp[0][j++] = 0;
            }
        } else {
            dp[0][j] = 1;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    console.log('dp :>> ', dp);
    return dp[m - 1][n - 1];
};
// @lc code=end

uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]);