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
  //动态规划 dp[i]定义: 以nums[i]为结尾元素时的 最大子数组和
  if(nums.length === 0){
    return 0
  }
  let dp = Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    if(i ===0){
      dp[i] = nums[0]
    }else{
      dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }
  }
  let maxSub = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < dp.length; i++) {
    maxSub = Math.max(maxSub, dp[i])
  }
  return maxSub
};

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
/**暴力解法
  if(nums.length === 0){
    return -1
  }
  let maxSub = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let curSub = nums[i]
    maxSub = Math.max(maxSub, curSub)
    for (let j = i + 1; j < nums.length; j++) {
      curSub += nums[j]
      maxSub = Math.max(maxSub, curSub)
    }
  }
  // console.log(maxSub)
  return maxSub
 */
// @lc code=end

