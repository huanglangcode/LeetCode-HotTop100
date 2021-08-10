/*
 * @lc app=leetcode id=1846 lang=javascript
 *
 * [1846] Maximum Element After Decreasing and Rearranging
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    let n = arr.length;
    let sorted = Array.from(arr).sort((a, b) => a - b);
    if (sorted[n - 1] > n) {
        return n;
    } else {
        sorted[0] = 1;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i + 1] - sorted[i] > 1) {
                sorted[i + 1] = sorted[i] + 1;
            }
        }
        return sorted[n - 1];
    }
};
// @lc code=end