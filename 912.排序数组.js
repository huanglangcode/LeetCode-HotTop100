/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const partition = (start, end) => {
        let idx = start, pivot = nums[start]
        for (let i = start + 1; i <= end; i++) {
            if (nums[i] < pivot) {
                idx++
                [nums[i], nums[idx]] = [nums[idx], nums[i]]
            }
        }
        [nums[start], nums[idx]] = [nums[idx], nums[start]]
        return idx
    }
    const helper = (left, right) => {
        if (left < right) {
            let p = partition(left, right)
            helper(left, p - 1)
            helper(p + 1, right)
        }
    }
    helper(0, nums.length - 1)
    return nums
};
// @lc code=end

var nums = [5, 1, 1, 2, 0, 0, 8, 7, 6, 5, 4]

let res = sortArray(nums)
console.log('res :>> ', res);