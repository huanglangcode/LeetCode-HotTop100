/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let subSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        subSum = Math.max(nums[i] + subSum, nums[i]);
        max = Math.max(max, subSum);
    }
    return max;
};
// @lc code=end

// [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);