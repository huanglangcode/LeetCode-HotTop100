/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。
两个相邻元素间的距离为 1 。

示例 1：
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]

示例 2：
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]

提示：
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
mat 中至少有一个 0 

 */
const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]]
// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let queue = new Array(), m = mat.length, n = mat[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = m + n
            }
        }
    }
    let distance = 0
    while (queue.length) {
        let arr = new Array()
        distance++
        for (const [i, j] of queue) {
            for (const [x, y] of DIRS) {
                const nextX = i + x
                const nextY = j + y
                if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && mat[nextX][nextY] > distance) {
                    mat[nextX][nextY] = distance
                    arr.push([nextX, nextY])
                }
            }
        }
        queue = arr
    }
    return mat
};
// @lc code=end
var mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]]
updateMatrix(mat)