/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + (right - left >> 2)
    console.log('mid :>> ', mid)
    //确定target是否在升序的部分里 如果在的话进行二分查找. 如果不在 继续二分
    //left mid,  mid+1 right 
    if (nums[mid] === target) { return mid }
    //todo
  }
  return -1
};

search([5, 6, 7, 8, 2, 3, 4], 4)
// @lc code=end

