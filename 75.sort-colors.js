/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let count = 0
  for (let i = 0; i + count < nums.length; i++) {
    if (nums[i] === 0) {
      let temp = nums[i]
      nums.splice(i,1)
      nums.unshift(temp)
    } else if (nums[i] === 2) {
      let temp = nums[i]
      nums.splice(i,1)
      nums.push(temp)
      i--
      count++
    } else{
      continue
    }
  }
  // console.log('nums :>> ', nums);
};
// @lc code=end
// sortColors([2,0,2,1,1,0])
