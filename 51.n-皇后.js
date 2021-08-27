/*
 * @lc app=leetcode.cn id=51 lang=javascript
 * [51] N 皇后
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，
并且使皇后彼此之间不能相互攻击。
给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，
该方案中 'Q' 和 '.' 分别代表了皇后和空位。 
每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
*/

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let checkerboard = [...Array(n)].map(_ => Array(n).fill('.'))
    let res = []
    const helper = (line) => {
        if (line === n - 1) {
            res.push(checkerboard.map(ele => ele.join('')))
            return
        }
        for (let i = 0; i < n; i++) {
            checkerboard[line + 1][i] = 'Q'
            if (checker(checkerboard, n)) {
                helper(line + 1)
            }
            checkerboard[line + 1][i] = '.'
        }
    }
    for (let i = 0; i < n; i++) {
        checkerboard[0][i] = 'Q'
        helper(0)
        checkerboard[0][i] = '.'
    }
    console.log('res :>> ', res);
    return res
};

var checker = (array, length) => {
    let hashI = {}
    let hashJ = {}
    let hashX = []
    const slopeCheck = (x2, y2) => {
        for (const [x1, y1] of hashX) {
            if (Math.abs((y2 - y1) / (x2 - x1)) === 1) {
                return true
            }
        }
        return false
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[i][j] === 'Q') {
                if (hashI[i] || hashJ[j] || slopeCheck(i, j)) { return false }
                hashI[i] = 1
                hashJ[j] = 1
                hashX.push([i, j])
            }
        }
    }
    return true
}
// [[[".","Q",".","."],[".",".",".","Q"],["Q",".",".","."],[".",".","Q","."]],[[".",".","Q","."],["Q",".",".","."],[".",".",".","Q"],[".","Q",".","."]]]
// [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// @lc code=end
solveNQueens(4)
solveNQueens(1)
