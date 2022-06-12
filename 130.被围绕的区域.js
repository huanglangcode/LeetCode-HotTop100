/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
const DIRS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]
var solve = function (board) {
    let m = board.length,
        n = board[0].length

    const coverd = (i, j) => {
        for (const [x, y] of DIRS) {
            const p = i + x,
                q = j + y
            if (p < 0 || q < 0 || p > m - 1 || q > n - 1) {
                continue
            }
            if (board[p][q] === 'O') {
                board[p][q] = '1'
                coverd(p, q)
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                if (board[i][j] === 'O') {
                    board[i][j] = '1'
                    coverd(i, j)
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            if (board[i][j] === '1') {
                board[i][j] = 'O'
            }
        }
    }
    return board
};

const twoD2OneD = (i, j, m) => {
    return m * i + j
}
// @lc code=end

var board = [
    ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
    ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "O", "X", "X", "X", "X", "X"],
    ["X", "O", "X", "X", "X", "O", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X"],
    ["X", "X", "O", "X", "X", "O", "O", "X", "X", "X"],
    ["O", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "O", "X", "X", "X"],
    ["X", "O", "O", "X", "X", "O", "X", "X", "O", "O"],
    ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"]
]

let real = [
    ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"]
]

let exp = [
    ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
    ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
    ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "O", "O"],
    ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"]
]

let res = solve(board)
console.log('res', res);