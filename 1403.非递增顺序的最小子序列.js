/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a)
    let sum = nums.reduce((acc, curr) => acc += curr)
    let ans = [], temp = 0
    for (let i = 0; i < nums.length; i++) {
        if (temp > sum) break
        ans.push(nums[i])
        temp += nums[i]
        sum -= nums[i]
    }
    return ans
};
// @lc code=end

var nums = [4, 4, 7, 6, 7]

let res = minSubsequence(nums)
console.log('res', res)