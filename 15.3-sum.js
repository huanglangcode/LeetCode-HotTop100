/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [ -4, -1, -1, 0, 1, 2 ]
var threeSum = function (nums) {
  if (nums.length < 3) { return []; }
  nums = nums.sort((p, q) => { return p - q; });
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let need = 0 - nums[i];
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[j] + nums[k] < need) {
        j++;
      } else if (nums[j] + nums[k] > need) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) { j++; }
        while (j < k && nums[k] === nums[k + 1]) { k--; }
      }
    }
  }
  return result;
};

threeSum([-2, 0, 1, 1, 2]);
// @lc code=end

