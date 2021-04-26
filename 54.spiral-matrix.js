/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = []
    if (!matrix.length || !matrix[0].length) {
        return result
    }
    const visited = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false))
    let total = matrix.length * matrix[0].length
    let i = 0
    let j = 0
    let initialD = 0
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (let q = 0; q < total; q++) {
        result.push(matrix[i][j])
        visited[i][j] = true
        const nextRow = i + direction[initialD][0], nextColumn = j + direction[initialD][1]
        if (nextRow < 0 || nextRow >= matrix.length || nextColumn < 0 || nextColumn >= matrix[0].length || !!visited[nextRow][nextColumn]) {
            initialD = (initialD + 1) % 4
        }
        i += direction[initialD][0]
        j += direction[initialD][1]
    }
    return result

};
// @lc code=end

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// 1 2 3
// 4 5 6
// 7 8 9
// output: 1 2 3 6 9 8 7 4 5