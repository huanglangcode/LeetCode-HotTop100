/*
 * @lc app=leetcode.cn id=1414 lang=javascript
 *
 * [1414] 和为 K 的最少斐波那契数字数目
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    if (k < 3) { return 1 }
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < 100; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
        if (dp[i] === k) {
            return 1
        }
        if (dp[i] > k) {
            break
        }
    }
    dp.pop()
    let cnt = 0
    let i = dp.length - 1
    while (k > 0) {
        if (k >= dp[i]) {
            k -= dp[i]
            if (k === 0) {
                return cnt + 1
            }
            cnt++
        } else {
            i--
        }
    }
};
// @lc code=end

let ans = findMinFibonacciNumbers(27542)
console.log(ans)