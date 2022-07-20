/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
你可以假设所有输入数组都可以得到满足题目要求的结果。

示例 1：
输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
示例 2：
输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b)
    console.log('nums :>> ', nums);
    for (let i = 1; i <= nums.length / 2; i += 2) {
        [nums[i], nums[nums.length - i - 1]] = [nums[nums.length - i - 1], nums[i]]
    }
    console.log('nums :>> ', nums);
};
// @lc code=end

// var nums = [1, 3, 2, 2, 3, 1]
var nums = [8, 8, 8, 1, 1, 1]

wiggleSort(nums)