/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length;
    let dp = [...new Array(n)].map(_ => new Array(n));
    dp[n - 1] = matrix[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] = Math.min(dp[i + 1][j], Number.isInteger(dp[i + 1][j + 1]) ? dp[i + 1][j + 1] : 101, Number.isInteger(dp[i + 1][j - 1]) ? dp[i + 1][j - 1] : 101) + matrix[i][j];
        }
    }
    console.log('dp :>> ', dp);
    return Math.min(...dp[0]);
};
// @lc code=end

minFallingPathSum([
    [100, -42, -46, -41],
    [31, 97, 10, -10],
    [-58, -51, 82, 89],
    [51, 81, 69, -51]
]);

// minFallingPathSum([[-80, -13, 22], [83, 94, -5], [73, -48, 61]]);
// minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]);
// minFallingPathSum([[-19, 57], [-40, -5]]);
// minFallingPathSum([[-48]]);