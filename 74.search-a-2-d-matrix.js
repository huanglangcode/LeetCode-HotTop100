/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 1; i < matrix.length; i++) {
        matrix[0].push(...matrix[i])
    }
    let arr = matrix[0]
    let high = arr.length - 1
    let low = 0
    while (low < high) {
        mid = ((high - low) >> 1) + low
        if (arr[mid] === target) {
            return true
        } else if (arr[mid] > target) {
            high = mid
        } else {
            low = mid
        }
    }
    return false
};


searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)
// @lc code=end

