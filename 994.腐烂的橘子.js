/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 * 
在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 */
const DIRS = [[-1, 0], [1, 0], [0, 1], [0, -1]]
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length, n = grid[0].length, cnt = m * n
    let queue = new Array()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j])
            }
            if (grid[i][j] === 0) {
                cnt--
            }
        }
    }
    let alreadyBad = queue.length
    if (cnt === alreadyBad) {
        return 0
    }
    let min = 0
    while (queue.length) {
        let arr = new Array()
        for (const [i, j] of queue) {
            for (const [x, y] of DIRS) {
                let nextX = i + x
                let nextY = j + y
                if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextX][nextY] === 1) {
                    grid[nextX][nextY] = 2
                    arr.push([nextX, nextY])
                    alreadyBad++
                }
            }
        }
        min++
        queue = arr
    }
    if (cnt === alreadyBad) {
        return min - 1
    }
    return -1
};
// @lc code=end
var grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 2]
]
let res = orangesRotting(grid)
console.log('res :>> ', res);