/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    if (n < 2) { return 0 }
    let dp = Array(n + 1)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 2
    dp[3] = 3
    for (let i = 3; i <= n; i++) {
        let half = i >> 1
        if ((i & 1) === 1) {
            let res = i
            for (let j = 3; j <= half; j++) {
                if (i % j === 0) {
                    res = Math.min(res, dp[i / j] + j)
                }
            }
            dp[i] = Math.min(i, res)
        } else {
            dp[i] = dp[half] + 2
        }
    }
    return dp[n]
};
// @lc code=end
