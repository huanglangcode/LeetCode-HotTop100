/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let idxShould = nums[i] - 1
        if (i === idxShould || nums[idxShould] === nums[i]) { continue }
        if (idxShould >= 0 && idxShould < nums.length) {
            [nums[i], nums[idxShould]] = [nums[idxShould], nums[i]]
            i--
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i] - 1) {
            return i + 1
        };
    }
    return nums.length + 1
};
// @lc code=end

firstMissingPositive([1, 1, 2, 0])  //3    -> [1,2,0]
firstMissingPositive([3, 4, -1, 1]) //2 -> [1 ,-1, 3, 4]
firstMissingPositive([7, 8, 9, 11, 12]) //1
firstMissingPositive([1, 2, 3, 4]) //5
/**给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。 */