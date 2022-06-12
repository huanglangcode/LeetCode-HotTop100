/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let n = matrix.length, left = matrix[0][0], right = matrix[n - 1][n - 1]
    while (left <= right) {
        const mid = right - ((right - left) >> 1)
        const cnt = counter(matrix, mid) // 小于等于mid的个数
        if (cnt < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};

function counter(matrix, val) {
    const l = matrix[0].length
    let m = 0, n = l - 1, cnt = 0
    while (m < l && n >= 0) {
        if (matrix[m][n] <= val) {
            cnt += n + 1
            m++
        } else {
            n--
        }
    }
    return cnt
}
// @lc code=end

var matrix = [[-5]], k = 1

let res = kthSmallest(matrix, k)
console.log('res :>> ', res);