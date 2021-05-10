/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const hash = nums.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    nums = nums.sort((a, b) => a - b).filter((ele, idx) => {
        return nums[idx] !== nums[idx + 1];
    });
    let dp = new Array(nums.length + 1).fill(0);
    dp[1] = nums[0] * hash[nums[0]];
    for (let i = 2; i <= nums.length; i++) {
        if (nums[i - 1] - nums[i - 2] > 1) {
            dp[i] = dp[i - 1] + nums[i - 1] * hash[nums[i - 1]];
        } else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1] * hash[nums[i - 1]]);
        }
    }
    return dp[dp.length - 1];
};
// @lc code=end

// 14
deleteAndEarn([3, 1]);