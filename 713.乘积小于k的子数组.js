/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let n = nums.length, ans = 0;
    if (k <= 1) return 0;
    for (let i = 0, j = 0, cur = 1; i < n; i++) {
        cur *= nums[i];
        while (cur >= k) cur /= nums[j++];
        ans += i - j + 1;
    }
    return ans;
};
// @lc code=end

var nums = [57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22]
    , k = 18

// nums = nums = [1, 2, 3], k = 0

let res = numSubarrayProductLessThanK(nums, k)
console.log('res :>> ', res);  // 24


/**
 * 1 1
 * 2 3
 * 3 6
 * 4 10
 * 5 15
 * 
 * 
 * 
 * 
 */