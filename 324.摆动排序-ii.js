/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort((a, b) => b - a)
    const nums1 = nums.slice(0, nums.length >> 1)
    const nums2 = nums.slice(nums.length >> 1)
    let start = 0, i = 0, j = 0
    while (start < nums.length) {
        nums[start++] = nums2[j++]
        if (nums1[i]) {
            nums[start++] = nums1[i++]
        }
    }
    return nums
};
// @lc code=end

var nums = [1, 3, 2, 2, 3, 1]

nums = [1, 1, 1, 1, 1, 8, 8, 8, 8]

let res = wiggleSort(nums)
console.log('res :>> ', res);