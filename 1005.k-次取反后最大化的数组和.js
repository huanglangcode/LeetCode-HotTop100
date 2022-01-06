/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

以这种方式修改数组后，返回数组 可能的最大和 。

 

示例 1：

输入：nums = [4,2,3], k = 1
输出：5
解释：选择下标 1 ，nums 变为 [4,-2,3] 。
示例 2：

输入：nums = [3,-1,0,2], k = 3
输出：6
解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
示例 3：

输入：nums = [2,-3,-1,5,-4], k = 2
输出：13
解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b)
    let mid = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i]
            k--
        } else {
            break
        }
        mid = i
    }
    let sum = nums.reduce((sum, curr) => { sum += curr; return sum }, 0)
    if (k > 0 && k % 2 !== 0) {
        let min = Math.min(nums[mid], nums[mid - 1] || Number.MAX_SAFE_INTEGER)
        return sum - 2 * min
    }
    return sum
};
// @lc code=end

let a = largestSumAfterKNegations([-2, 5, 0, 2, -2], 3)
console.log('a :>> ', a);

// [-4,-2,-3]
// 4