/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 * 
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
示例 1:
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    quickSort(nums, 0, nums.length - 1)
    return nums.slice(0, k)
};

const quickSort = (nums, left, right) => {
    left = left > nums.length - 1 ? nums.length - 1 : left;
    right = right < 0 ? 0 : right;
    if (left < right) {
        let p = partition(nums, left, right)
        quickSort(nums, left, p - 1)
        quickSort(nums, p + 1, right)
    }
}

const partition = (nums, left, right) => {
    let p = left;
    for (let i = left + 1; i <= right; i++) {
        if (nums[i] < nums[p]) {
            const a = nums.splice(i, 1)
            nums.splice(p, 0, a[0])
            p++
        }
    }
    return p;
}
// @lc code=end

topKFrequent([0, 9, 5, 1, 3, 7, 2, 4, 6, 8, 2, 5, 7, 6, 4, 1, 2, 4, 6, 7, 10, 5, 8, 7], 2)
// partition([5, 1, 3, 7, 2, 4, 6, 8, 9], 0, 8)
