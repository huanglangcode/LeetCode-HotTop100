/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let t = 0
    for (let i = 0; i < n; i++) {
        [nums[i], nums[i + t]] = [nums[i + t], nums[t]]
        t++
    }
    console.log('nums', nums)
};
// @lc code=end

var nums = [1, 2, 3, 4, 5, 6, 7, 8], n = 4
//          1  2  3  4  5  6  7  8
//          1  5  2  6  3  7  4  8
//  2 3    3 5    4 7
//  5 2    6 4    7 6
let res = shuffle(nums, n)
console.log('res', res)