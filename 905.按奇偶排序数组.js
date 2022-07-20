/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    for (let i = 0, j = nums.length - 1; i < j; i++) {
        if ((nums[i] & 1) !== 0) {
            while ((nums[j] & 1) !== 0 && j > i) {
                j--
            }
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    return nums
};
// @lc code=end


var nums = [3, 1, 2, 4]

sortArrayByParity(nums)