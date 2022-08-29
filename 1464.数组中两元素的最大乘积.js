/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let first = -1, second = -1
    for (const num of nums) {
        if (num > first) {
            second = first
            first = num
        } else if (num > second) {
            second = num
        }
    }
    return (first - 1) * (second - 1)
};
// @lc code=end
var nums = [3, 4, 5, 2]

let res = maxProduct(nums)
console.log('res', res)