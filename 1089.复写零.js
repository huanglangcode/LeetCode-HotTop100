/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let i = 0, n = arr.length, j = n - 1
    while (i < j) {
        if (arr[i] === 0) {
            j--
        }
        i++
    }
    console.log('p :>> ', n - 1 - j);
    for (let k = n - 1; k >= 0 && k > j; k--) {
        if (arr[j] !== 0) {
            arr[k] = arr[j]
        } else {
            arr[k] = 0
            arr[k - 1] = 0
            k -= 1
        }
        j--
    }
};
// @lc code=end

// var nums = [1, 5, 2, 0, 6, 8, 0, 6, 0]
var nums = [9, 9, 9, 4, 8, 0, 0, 3, 7, 2, 0, 0, 0, 0, 9, 1, 0, 0, 1, 1, 0, 5, 6, 3, 1, 6, 0, 0, 2, 3, 4, 7, 0, 3, 9, 3, 6, 5, 8, 9, 1, 1, 3, 2, 0, 0, 7, 3, 3, 0, 5, 7, 0, 8, 1, 9, 6, 3, 0, 8, 8, 8, 8, 0, 0, 5, 0, 0, 0, 3, 7, 7, 7, 7, 5, 1, 0, 0, 8, 0, 0]
var tres = [9, 9, 9, 4, 8, 0, 0, 0, 0, 3, 7, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 1, 1, 0, 0, 5, 6, 3, 1, 6, 0, 0, 0, 0, 2, 3, 4, 7, 0, 0, 3, 9, 3, 6, 5, 8, 9, 1, 1, 3, 2, 0, 0, 0, 0, 7, 3, 3, 0, 0, 5, 7, 0, 0, 8, 1, 9, 6, 3, 0, 0, 8, 8, 8, 8, 0]
// var nums = [8, 4, 5, 0, 0, 0, 0, 7]

// [1, 0, 2, 3, 0, 4]
// [1, 0, 2, 3, 0, 4, 5, 0]
// []
// [1, 0, 0, 2, 3, 0, 4, 5]

duplicateZeros(nums)
console.log('nums :>> ', nums);