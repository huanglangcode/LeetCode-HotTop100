/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
    let max = 1
    for (let i = 0; i < nums.length - max; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let cha = nums[j] - nums[i], temp = 1
            let needed = nums[i] + cha
            for (let k = j; k < nums.length; k++) {
                if (nums[k] === needed) {
                    needed += cha
                    temp++
                }
            }
            max = Math.max(max, temp)
        }
    }
    return max
};
// @lc code=end

var nums = [3, 6, 9, 12]

let res = longestArithSeqLength(nums)
console.log('res', res)