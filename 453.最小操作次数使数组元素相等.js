/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 * 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。
    输入：nums = [1,2,3]
    输出：3
    解释：
    只需要3次操作（注意每次操作会增加两个元素的值）：
    [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let min = Math.min(...nums)
    let last = 0
    for (let i = 0; i < nums.length; i++) {
        last += nums[i] - min
    }
    return last
};
// @lc code=end