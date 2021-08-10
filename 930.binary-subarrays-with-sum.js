/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let res = 0;
    let sum = 0;
    let hash = {};
    hash[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hash[sum - goal]) {
            res += hash[sum - goal];
        }
        hash[sum] = (hash[sum] + 1) || 1;
    }
    return res;
};
numSubarraysWithSum([1, 0, 1, 0, 1], 2);
numSubarraysWithSum([0, 0, 0, 0, 0], 0);
// @lc code=end

/**
    map<int, int>data;
    int sum = 0;
    int ret = 0;
    data[0] = 1;
    for (int i = 0; i < nums.size(); i++) {
        sum += nums[i];
        ret += data[sum-goal];
        data[sum]++;
    }
    return ret;
*/