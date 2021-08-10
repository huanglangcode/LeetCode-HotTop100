/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = l + (r - l >> 1);
        const curr = nums[mid];
        if (curr === target) {
            return mid;
        } else if (curr < target) {
            l = mid + 1;
        } else if (curr > target) {
            r = mid - 1;
        }
    }
    console.log('l :>> ', l);
    return l;
};
// @lc code=end

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 0);
searchInsert([1], 0);