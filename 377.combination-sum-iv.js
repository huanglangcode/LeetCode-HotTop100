/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * 
 * [377] Combination Sum IV
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 */
// dp[i]: 凑成目标正整数为i的排列个数为dp[i]
var combinationSum4 = (nums, target) => {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (num <= i) {
                dp[i] += dp[i - num];
            }
        }
    }
    console.log("dp :>> ", dp);
    return dp[target];
};

/**
 * BF超时...
 */
// var combinationSum4 = function (nums, target) {
//     let count = 0;
//     const helper = (curr) => {
//         if (curr === target) {
//             count++;
//             return;
//         }
//         if (curr > target) {
//             return;
//         }
//         for (const num of nums) {
//             if (curr < target) {
//                 helper(curr + num);
//             }
//         }
//     };
//     helper(0);
//     console.log("res :>> ", count);
//     return count;
// };

// 在nums数组里找到target= [0,1,2,3,4,5,6,.....target]的组合
// var combinationSum4 = (nums, target) => {
//     const memo = new Array(target + 1).fill(-1);
//     memo[0] = 1;
//     const res = search(nums, target, memo);
//     return res;
// };

// var search = (nums, target, memo) => {
//     if (memo[target] !== -1) {
//         return memo[target];
//     }
//     let res = 0;
//     for (const num of nums) {
//         if (target >= num) {
//             res += search(nums, target - num, memo);
//         }
//     }
//     memo[target] = res;
//     return res;
// };
// @lc code=end

combinationSum4([9, 2, 3, 4, 5], 6);