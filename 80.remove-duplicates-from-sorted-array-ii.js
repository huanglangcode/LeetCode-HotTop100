/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 3) {
        return nums.length;
    }
    let i = 0;
    let j = 1;
    while (i < j && j < nums.length) {
        while (nums[i] === nums[j]) {
            j++;
        }
        // console.log("i, j :>> ", i, j);
        if (j - i > 2) {
            nums.splice(i, j - i - 2);
            i = j - i - 1;
            j = i + 1;
        } else {
            i++;
            j++;
        }
    }
    // console.log("nums :>> ", nums);
    return nums.length;
};
// @lc code=end

removeDuplicates([0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 5]);