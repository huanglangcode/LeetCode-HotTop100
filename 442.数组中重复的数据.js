/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != nums[nums[i] - 1]) {
            let temp = nums[i];
            [nums[i], nums[temp - 1]] = [nums[temp - 1], nums[i]]
        }
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(nums[i])
    }
    return res
};
// @lc code=end

var nums = [39, 31, 8, 14, 14, 38, 5, 15, 29, 49, 18, 6, 30, 47, 8, 35, 2, 17, 6, 10, 29, 46, 41, 48, 1, 36, 5, 28, 46, 39, 7, 47, 18, 42, 17, 11, 36, 45, 21, 33, 24, 10, 24, 50, 25, 16, 9, 12, 11, 25]

// // [14,8,6,29,5,46,39,47,18,17,36,10,24,11,25]
// let p = [14, 8, 6, 29, 5, 46, 39, 47, 18, 17, 36, 10, 24, 11, 25].sort((a, b) => a - b)
// console.log('p :>> ', p);

nums = [4, 3, 2, 7, 8, 2, 3, 1]

let res = findDuplicates(nums)
console.log('res :>> ', res.sort((a, b) => a - b));


// [4, 3, 2, 7, 8, 2, 3, 1]
// [7, 3, 2, 4, 8, 2, 3, 1]
// [3, 3, 2, 4, 8, 2, 7, 1]
// [2, 3, 3, 4, 8, 2, 7, 1]
// [3, 2, 3, 4, 8, 2, 7, 1]
// [3, 2, 3, 4, 1, 2, 7, 8]
// [1, 2, 3, 4, 3, 2, 7, 8]