/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let res = 0;
    if (nums.length < 2) {
        return res;
    }
    let prefixSum = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i] === 0 ? -1 : 1;
        prefixSum[i + 1] = prefixSum[i] + curr;
    }
    let hash = {};
    for (let i = 0; i < prefixSum.length; i++) {
        hash[prefixSum[i]] = !!hash[prefixSum[i]] ? hash[prefixSum[i]].concat(i) : [i];
        if (hash[prefixSum[i]].length > 1) {
            res = Math.max(res, hash[prefixSum[i]][hash[prefixSum[i]].length - 1] - hash[prefixSum[i]][0]);
        }
    }
    return res;
};

findMaxLength([0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1]); // 10
// @lc code=end

