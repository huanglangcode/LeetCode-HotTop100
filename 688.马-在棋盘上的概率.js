/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] “马”在棋盘上的概率
 * 
在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。
行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。
象棋骑士有8种可能的走法，如下图所示。
每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。

每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。
骑士继续移动，直到它走了 k 步或离开了棋盘。
返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。

示例 1：
输入: n = 3, k = 2, row = 0, column = 0
输出: 0.0625
解释: 有两步(到(1,2)，(2,1))可以让骑士留在棋盘上。
在每一个位置上，也有两种移动可以让骑士留在棋盘上。
骑士留在棋盘上的总概率是0.0625。

示例 2：
输入: n = 1, k = 0, row = 0, column = 0
输出: 1.00000

提示:
1 <= n <= 25
0 <= k <= 100
0 <= row, column <= n
 */

const DIRS = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    let dp = [...Array(k + 1)].map(_ => [...Array(n)].map(_ => Array(n).fill(0)))
    dp[0][row][column] = 1
    for (let q = 1; q <= k; q++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (const [x, y] of DIRS) {
                    let nextI = i + x, nextJ = j + y
                    if (nextI >= 0 && nextI < n && nextJ >= 0 && nextJ < n) {
                        dp[q][nextI][nextJ] += dp[q - 1][i][j] * 0.125
                    }
                }
            }
        }
    }
    let res = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += dp[k][i][j]
        }
    }
    console.log('dp :>> ', dp);
    return res
};
// @lc code=end

/**
 * XXX
 * XXX
 * XXX
 */

var n = 3, k = 2, row = 0, column = 0
let res = knightProbability(n, k, row, column)
console.log('res :>> ', res);


// var knightProbability = function (n, k, row, column) {
//     let queue = [[row, column]]
//     let cnt = 0
//     let successRate = 1
//     while (queue.length) {
//         let length = queue.length
//         let reallyCnt = 0
//         let falseCnt = 0
//         if (cnt === k) {
//             break
//         }
//         while (length--) {
//             let [i, j] = queue.shift()
//             for (const [x, y] of DIRS) {
//                 reallyCnt++
//                 let nextI = i + x, nextJ = j + y
//                 if (nextI < 0 || nextI >= n || nextJ < 0 || nextJ >= n) {
//                     falseCnt++
//                     continue
//                 }
//                 queue.push([nextI, nextJ])
//             }
//         }
//         successRate -= (successRate * (falseCnt / reallyCnt))
//         cnt++
//     }
//     return successRate
// };