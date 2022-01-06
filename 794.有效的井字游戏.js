/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
给你一个字符串数组 board 表示井字游戏的棋盘。
当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。
井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。

以下是井字游戏的规则：

玩家轮流将字符放入空位（' '）中。
玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
当所有位置非空时，也算为游戏结束。
如果游戏结束，玩家不允许再放置字符。

输入：board = ["XOX",
              "O O",
              "XOX"]
输出：true

提示：
board.length == 3
board[i].length == 3
board[i][j] 为 'X'、'O' 或 ' '
 */

// @lc code=start
/**
X先手，所以个数要么比O多一个，要么一样。
两个人之间只能有一个人赢，赢的时候，X赢的话必然比O多一个，O赢的话必然和X一样多。
 * @param {string[]} board
 * @return {boolean}
 */
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
    let xCnt = 0
    let oCnt = 0
    let duijiaoxianX = 0
    let duijiaoxianO = 0
    let xWin = false
    let oWin = false
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'XXX') {
            xWin = true
        }
        if (board[i] === 'OOO') {
            oWin = true
        }
        if (board[i][i] === 'X') {
            duijiaoxianX++
        } else if (board[i][i] === 'O') {
            duijiaoxianO++
        }
        let lieXCnt = 0
        let lieOCnt = 0
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                xCnt++
            } else if (board[i][j] === 'O') {
                oCnt++
            }
            if (board[j][i] === 'X') {
                lieXCnt++
            } else if (board[j][i] === 'O') {
                lieOCnt++
            }
        }
        if (lieXCnt === 3) {
            xWin = true
        }
        if (lieOCnt === 3) {
            oWin = true
        }
    }
    if (oCnt > xCnt || xCnt > oCnt + 1) {
        return false
    }
    if (duijiaoxianX === 3) {
        xWin = true
    }
    if (duijiaoxianO === 3) {
        oWin = true
    }
    duijiaoxianX = 0
    duijiaoxianO = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i][board.length - 1 - i] === 'X') {
            duijiaoxianX++
        } else if (board[i][board.length - 1 - i] === 'O') {
            duijiaoxianO++
        }
    }
    if (duijiaoxianX === 3) {
        xWin = true
    }
    if (duijiaoxianO === 3) {
        oWin = true
    }
    if (!xWin && !oWin) {
        return true
    }
    if (xWin && oWin) {
        return false
    }
    if (xWin) {
        return xCnt === oCnt + 1
    } else if (oWin) {
        return xCnt === oCnt
    }
};
// @lc code=end

let res = validTicTacToe([
    "XXO",
    "XOX",
    "OXO"
])

console.log('res :>> ', res);