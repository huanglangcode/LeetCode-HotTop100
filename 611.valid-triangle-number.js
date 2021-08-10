/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let ans = 0;
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--) {
        let l = 0, r = i - 1;
        while (l < r) {
            if (nums[l] + nums[r] > nums[i]) {
                ans += r - l;
                r--;
            } else {
                l++;
            }
        }
    }
    return ans;
};
// @lc code=end

triangleNumber([2, 2, 3, 4]);
triangleNumber([4, 2, 3, 4]);