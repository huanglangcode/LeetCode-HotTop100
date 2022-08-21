/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function (grid, moveCost) {
    let m = grid.length, n = grid[0].length, dp = [...new Array(m)].map(_ => new Array(n).fill(Infinity))
    for (let i = 0; i < n; i++) {
        dp[0][i] = grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j] + moveCost[grid[i - 1][k]][j])
            }
        }
    }
    return Math.min(...dp[m - 1])
};


var grid = [[5, 1, 2], [4, 0, 3]], moveCost = [[12, 10, 15], [20, 23, 8], [21, 7, 1], [8, 1, 13], [9, 10, 25], [5, 3, 2]]



/**
 *   5     3
 *    3   18
 * 14        6
 * 
 *   4     0
 *    4   9
 * 2         8
 * 
 *   2     1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

let res = minPathCost(grid, moveCost)
console.log('res :>> ', res);