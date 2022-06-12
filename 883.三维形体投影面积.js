/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        let hangMax = 0
        let lieMax = 0
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) res++
            hangMax = Math.max(grid[i][j], hangMax)
            lieMax = Math.max(grid[j][i], lieMax)
        }
        res += hangMax
        res += lieMax
    }
    return res
};
// @lc code=end

var grid = [[1, 2], [3, 4]]
let res = projectionArea(grid)
console.log('res :>> ', res);