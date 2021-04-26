/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
Example 1:

Input: nums = [1,3,5]
Output: 1
Example 2:

Input: nums = [2,2,2,0,1]
Output: 0
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right && nums[left] === nums[right]) {
        right--;
    }
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] <= nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
    }
    console.log("res :>> ", nums[left]);
    return nums[left];
};

findMin([2, 0, 1, 1, 2]);
findMin([2, 0, 1, 1, 1]);
findMin([2, 2, 2, 0, 1]);
findMin([2, 0, 0, 0, 1]);
findMin([2, 0]);
findMin([2, 2, 0]);
findMin([0, 1, 2]);
findMin([0, 2, 2]);
// @lc code=end

