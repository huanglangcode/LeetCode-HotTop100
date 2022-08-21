/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    let row = new Array(m).fill(0), col = new Array(n).fill(0)
    for (const [i, j] of indices) {
        row[i]++
        col[j]++
    }
    let ans = 0
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if ((row[i] + col[j]) % 2 !== 0) {
                ans++
            }
        }
    }
    return ans
};
// @lc code=end

var m = 2, n = 2, indices = [[1, 1], [0, 0]]

let r = oddCells(m, n, indices)
console.log('r :>> ', r);