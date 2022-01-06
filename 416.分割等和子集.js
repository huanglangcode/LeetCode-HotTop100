/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 * 
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    const target = sum / 2
    if (!Number.isInteger(target)) {
        return false
    }
    // 使用i个数字能否求得j      remain idx
    // let dp = [...Array(nums.length + 1)].map(_ => Array(target + 1).fill(false))
    // for (let i = 0; i < dp.length; i++) {
    //     dp[i][0] = true
    // }
    // for (let i = 1; i < dp.length; i++) {
    //     for (let j = 1; j < dp[0].length; j++) {
    //         dp[i][j] = dp[i - 1][j]
    //         if (j >= nums[i - 1]) {
    //             dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - nums[i - 1]])
    //         }
    //     }
    // }
    // console.log('dp :>> ', dp);
    // let dp = Array(target + 1).fill(false)
    // dp[0] = true
    // for (let num of nums) {
    //     for (let i = target; i > 0; i--) {
    //         if (i - num >= 0) {
    //             dp[i] = dp[i] || dp[i - num];
    //         }
    //     }
    // }
    // console.log('dp :>> ', dp);
};
// @lc code=end

const res = canPartition([1, 5, 4, 3, 1, 2, 1, 5])
console.log('res :>> ', res);

// 1 1 1 2 3 4 5 5 