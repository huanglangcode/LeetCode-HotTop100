/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = 0, n = points.length
    for (let i = 0; i < n - 2; i++) {
        const [x1, y1] = points[i]
        for (let j = i + 1; j < n - 1; j++) {
            const [x2, y2] = points[j]
            for (let k = j + 1; k < n; k++) {
                const [x3, y3] = points[k]
                max = Math.max(max, Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2)
            }
        }
    }
    return max
};
// @lc code=end


var points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]

let max = largestTriangleArea(points)
console.log('max :>> ', max);