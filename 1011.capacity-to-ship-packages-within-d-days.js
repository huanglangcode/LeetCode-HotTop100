/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// [1,2,3,4,5,6,7,8,9,10], D = 5
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10
var shipWithinDays = function (weights, D) {
    if (weights.length <= D) {
        return Math.max(...weights);
    }

};
// @lc code=end

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);