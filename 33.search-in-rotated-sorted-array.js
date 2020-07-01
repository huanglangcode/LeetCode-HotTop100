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
    let mid = left + (right - left >> 1)
    console.log('mid :>> ', mid, 'left: ', left, 'right: ', right)
    console.log('compare: ', target, nums[mid], nums[0])
    if (nums[mid] === target) {
      console.log('binggo :>> ', mid)
      return mid
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return  -1
};

search([4, 5, 6, 7, 0, 1, 2], 5)
// @lc code=end

