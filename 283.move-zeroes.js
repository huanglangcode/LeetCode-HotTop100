/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (var i = nums.length; i--;) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0);
    }
  }
  console.log('nums :>> ', nums)
};

moveZeroes([0, 0, 1])
// @lc code=end

