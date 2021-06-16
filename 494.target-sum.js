/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let sum = nums.reduce((acc, curr) => {
        acc += curr;
        return acc;
    });
    let dp = new Array(nums.length).fill(0).map(ele => ele = new Array(sum * 2 + 1).fill(0));
    console.log('dp, sum :>> ', dp, sum);
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        for (let j = -sum; j <= sum; j++) {
            if (i === 0) {
                if (ele === Math.abs(j)) {
                    dp[i][j + sum] = ele === 0 ? 2 : 1;
                }
            } else {
                dp[i][j + sum] = (dp[i - 1][j + sum + ele] || 0) + (dp[i - 1][j + sum - ele] || 0);
            }
        }
    }
    return dp[nums.length - 1][sum + target] || 0;
};

// findTargetSumWays([1, 1, 1, 1, 1], 3);
findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1);
// @lc code=end

