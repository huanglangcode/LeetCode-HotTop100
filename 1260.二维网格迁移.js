/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let m = grid.length, n = grid[0].length
    k %= (m * n)
    const arr = grid.flat()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (k === 0) k = m * n
            grid[i][j] = arr[m * n - k]
            k--
        }
    }
    console.log('grid :>> ', grid);
    return grid
};
// @lc code=end

var grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var k = 9

shiftGrid(grid, k)