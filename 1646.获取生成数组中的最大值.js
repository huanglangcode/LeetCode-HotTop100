/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    if (n < 2) { return n }
    let arr = Array(n + 1)
    arr[0] = 0
    arr[1] = 1
    for (let i = 1; 2 * i <= n; i++) {
        arr[2 * i] = arr[i]
        if (2 * i < n) {
            arr[2 * i + 1] = arr[i] + arr[i + 1]
        }
    }
    return Math.max(...arr)
};
// @lc code=end

getMaximumGenerated(4)