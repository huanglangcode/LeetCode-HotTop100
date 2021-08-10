/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let minSum = 0;
    for (let i = 1; i <= k; i++) {
        minSum += i;
    }
    if (minSum > n) {
        return res;
    }
    const helper = (arr, idx, sum) => {
        if (sum > n || arr.length > k) return;
        if (arr.length === k) {
            if (sum === n) res.push(arr);
            return;
        }
        for (let i = idx; i <= 9; i++) {
            if (arr.length < k && sum < n) {
                helper([...arr, i], i + 1, sum + i);
            }
        }
    };
    helper([], 1, 0);
    return res;
};
// @lc code=end

combinationSum3(3, 9);