/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 * 
输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1)
    let countArr = Array(nums.length).fill(1)
    let maxLength = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    countArr[i] = countArr[j];
                } else if (dp[i] === dp[j] + 1) {
                    countArr[i] += countArr[j];
                }
            }
        }
        maxLength = Math.max(maxLength, dp[i])
    }
    let res = 0
    for (let k = 0; k < nums.length; k++) {
        if (dp[k] === maxLength) res += countArr[k];
    }
    return res
};
// @lc code=end

findNumberOfLIS([10, 9, 2, 5, 3, 7, 101, 18])