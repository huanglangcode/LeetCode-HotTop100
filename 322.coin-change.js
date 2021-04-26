/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (!amount) {
        return 0
    }
    let dp = new Array(amount + 1).fill(10016)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    console.log(dp[amount])
    return dp[amount] === 10016 ? -1 : dp[amount]
};
// @lc code=end

coinChange([1, 2, 5], 11)