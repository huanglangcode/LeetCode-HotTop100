/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
    }
    return nums[left];
};

// findMin([3, 4, 5, 1, 2]);
findMin([5, 1, 2, 3, 4]);
// @lc code=end

