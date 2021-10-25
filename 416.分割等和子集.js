/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
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
};
// @lc code=end

const res = canPartition([1, 5, 4, 3, 1, 2, 1, 5])
console.log('res :>> ', res);