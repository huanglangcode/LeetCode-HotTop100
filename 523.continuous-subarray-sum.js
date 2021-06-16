/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    if (nums.length < 2) {
        return false;
    }
    let prefixSum = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    let hash = {};
    for (let i = 2; i < prefixSum.length; i++) {
        hash[prefixSum[i - 2] % k] = !!hash[prefixSum[i - 2] % k] ? hash[prefixSum[i - 2] % k] : i;
        if (hash[prefixSum[i] % k] || prefixSum[i] % k === 0) {
            return true;
        }
    }
    return false;
};
// @lc code=end

// [23,2,4,6,7], k = 6
checkSubarraySum([1, 0],
    2);

checkSubarraySum([23, 2, 4, 6, 6]
    , 7);

checkSubarraySum([0, 1, 0, 3, 0, 4, 0, 4, 0]
    , 5);
checkSubarraySum([0]
    , 1);
checkSubarraySum([5, 0, 0, 0]
    , 3);

checkSubarraySum([1, 2, 12]
    , 6);
checkSubarraySum([1, 2, 3], 5);

// prefixSum :>>  [0, 23, 25, 29, 35, 42 ]
// [0] [1]