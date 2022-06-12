/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    let [originSum, sum] = nums.reduce((acc, curr, idx) => { ; return [acc[0] += curr, acc[1] += curr * idx] }, [0, 0])
    let res = sum, n = nums.length
    for (let i = n - 1; i >= 0; i--) {
        sum = sum + originSum - nums[i] * n
        res = Math.max(res, sum)
    }
    return res
};
// @lc code=end

var nums = [4, 3, 2, 6]

let res = maxRotateFunction(nums)
console.log('res :>> ', res);