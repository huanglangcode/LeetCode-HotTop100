/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let flag = true
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      flag = false
      let compare = nums[i - 1]
      let minBigger = nums[i]
      let minBiggerIndex = i
      //找到最小的大于nums[i-1]的元素
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > compare && nums[j] < minBigger) {
          minBigger = nums[j]
          minBiggerIndex = j
        }
      }
      swap(nums, i - 1, minBiggerIndex)
      for (let j = i; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[j] > nums[k]) {
            swap(nums, j, k)
          }
        }
      }
      break
    }
  }
  if (flag) {
    nums.reverse()
  }
  // console.log(nums)
};

var swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}
nextPermutation([1, 3, 2])
// @lc code=end

/**let minBigger = nums[i]
      let minBiggerIndex = i
      console.log('compare :>> ', compare)
      console.log('minBigger :>> ', minBigger)
      console.log('minBiggerIndex :>> ', minBiggerIndex)
      for (let j = i; j < nums.length; j++) {
        if (nums[j] > compare && nums[j] < minBigger) {
          minBigger = nums[j]
          minBiggerIndex = j
        }
      }
      swap(nums, i - 1, minBiggerIndex) */