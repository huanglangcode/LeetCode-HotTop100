/*
 * @lc app=leetcode.cn id=312 lang=javascript
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const arr = [1, ...nums, 1];
    const n = nums.length;

};
// @lc code=end

console.time('maxCoins')
maxCoins([2, 4, 8, 4, 0, 7, 8, 9, 1, 2, 4, 7, 1, 7, 3]) // 2925
console.timeEnd('maxCoins')

// 以两个数作为左右端点，找出最优解中它们中间那个戳破的气球，中间这个气球把整个队列分为了2部分.
// 要想让中间这个气球和2个端点靠在一起，就需要先把分开的2部分的气球戳破。 
// dp[i][j]表示i~j最大值，i，j不戳破。
// 比如k气球在i,j之间时(i,k,j)被戳破，那么要先戳破i,k、k,j之间的气球，所以dp[i][j]=dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j]