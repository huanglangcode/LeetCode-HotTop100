/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 定义 f[i][j] 为考虑前 i 件物品，凑成总和为 j 的方案数量。
// 其中第i件物品可以使用k次.
var change1 = function (amount, coins) {
    let dp = new Array(coins.length + 1).fill(0).map(ele => ele = new Array(amount + 1).fill(0));
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= coins.length; i++) {
        const val = coins[i - 1];
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j];
            for (let k = 1; k <= j / val; k++) {
                dp[i][j] += dp[i - 1][j - k * val];
            }
        }
    }
    return dp[coins.length][amount];
};

var change = function (amount, coins) {
    let hash = new Map();
    let helper = function (amount, idx) {
        if (amount === 0) {
            return 1;
        }
        if (idx >= coins.length || amount < 0) {
            return 0;
        }
        let key = `${amount}_${idx}`;
        if (hash.has(key)) {
            return hash.get(key);
        }
        let res1 = helper(amount, idx + 1);
        let res2 = helper(amount - coins[idx], idx);
        hash.set(key, res1 + res2);
        return res1 + res2;
    };
    return helper(amount, 0);
};
// @lc code=end

change(5, [1, 2, 5]);
change(8, [1, 2, 3, 4, 5, 6, 7, 8]);