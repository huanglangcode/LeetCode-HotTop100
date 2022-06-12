/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let m = grid.length, n = grid[0].length
    let ans = 0
    const helper = (x, y, v) => {
        ans = Math.max(ans, v)
        if (grid[x][y] === 0) {
            return
        }
        const p = grid[x][y]
        grid[x][y] = 0
        for ([a, b] of DIRS) {
            const nextI = x + a
            const nextJ = y + b
            if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
                helper(nextI, nextJ, v + p)
            }
        }
        grid[x][y] = p
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                helper(i, j, 0)
            }
        }
    }
    return ans
};
// @lc code=end

let ans = getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]])
console.log(ans)