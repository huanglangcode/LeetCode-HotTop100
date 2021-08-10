/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let start = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            start = i;
            console.log('无序开始 :>> ', start);
            break;
        }
    }
    if (!start) {
        return 0;
    }
    console.log('start :>> ', start);
    let end = nums.length - 1;
    for (let i = end; i > start; i--) {
        if (nums[i] < nums[i - 1]) {
            end = i;
            console.log('无序结束 :>> ', end);
            break;
        }
    }
    console.log('end :>> ', end);
    return end - start + 1;
};
// @lc code=end

findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15, 1, 6, 87, 1, 234, 345, 456, 234, 1, 123, 124, 245, 234, 123, 234, 345, 345, 123, 45, 23, 9, 2, 2, 7, 6, 6, 78, 3]);
// findUnsortedSubarray([5, 1, 2, 3, 4]);
// findUnsortedSubarray([1]);