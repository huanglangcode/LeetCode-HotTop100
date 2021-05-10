/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var PredictTheWinner = function (nums) {
//     let res = 0;
//     const helper = (i, j) => {
//         if (i === j) {
//             return nums[i];
//         }
//         const res1 = nums[i] + helper(i + 1, j);
//         const res2 = nums[j] + helper(i, j - 1);
//         return Math.max(res1, res2);
//     };
//     let canGet = helper(0, nums.length - 1);
//     console.log("canGet :>> ", canGet);
//     return canGet;
// };

var PredictTheWinner = function (nums) {

};
// @lc code=end

PredictTheWinner([1, 5, 233, 7]);