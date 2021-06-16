/*
 * @lc app=leetcode id=477 lang=javascript
 *
 * [477] Total Hamming Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let ans = 0, n = nums.length;
    for (let i = 1; i <= 30; ++i) {
        let c = 0;
        for (const val of nums) {
            c += (val >> i) & 1;
        }
        ans += c * (n - c);
    }
    return ans;
};

totalHammingDistance([4, 14, 2, 8]);
// @lc code=end