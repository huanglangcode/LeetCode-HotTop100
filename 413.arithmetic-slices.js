/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    if (nums.length < 3) {
        return 0;
    }
    let ans = 0;
    let temp = 0;
    let diff = nums[1] - nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === diff) {
            temp++;
        } else {
            diff = nums[i + 1] - nums[i];
            temp = 0;
        }
        ans += temp;
    }
    return ans;
};
// @lc code=end

numberOfArithmeticSlices([1, 2, 3, 4, 5, 7, 10, 13, 16, 19, 22]);