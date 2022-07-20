/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */
const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let m = matrix.length,
        n = matrix[0].length
    const memo = [...new Array(m)].map(_ => new Array(n).fill(0))
    let ans = 0
    const helper = (i, j) => {
        if (memo[i][j]) return memo[i][j]
        for (const [x, y] of DIRS) {
            let nextX = i + x,
                nextY = j + y
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && matrix[i][j] < matrix[nextX][nextY]) {
                memo[i][j] = Math.max(memo[i][j], helper(nextX, nextY) + 1)
            }
        }
        return memo[i][j]
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!memo[i][j]) {
                ans = Math.max(ans, helper(i, j))
            } else {
                ans = Math.max(ans, memo[i][j])
            }
        }
    }
    return ans + 1
};
// @lc code=end
var matrix = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]
longestIncreasingPath(matrix)