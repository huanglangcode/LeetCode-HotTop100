/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
输入：n = 3
输出：[
    [1,2,3],
    [8,9,4],
    [7,6,5]
    ]
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

var generateMatrix = function (n) {
    let arr = [...Array(n)].map(_ => Array(n).fill(0))
    let idx = 1
    let i = 0, j = 0
    let nextDir = 0
    while (idx <= n * n) {
        arr[i][j] = idx
        let nextI = i + direction[nextDir % 4][0]
        let nextJ = j + direction[nextDir % 4][1]
        if (nextI < 0 || nextJ < 0 || nextI >= n || nextI >= n || arr[nextI][nextJ] !== 0) {
            nextDir++
            nextI = i + direction[nextDir % 4][0]
            nextJ = j + direction[nextDir % 4][1]
        }
        i = nextI
        j = nextJ
        idx++
    }
    return arr
};
// @lc code=end

generateMatrix(3)