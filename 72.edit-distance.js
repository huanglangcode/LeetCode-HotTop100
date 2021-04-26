/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;

    let cost = new Array(m + 1).fill(0).map(ele => ele = new Array(n + 1).fill(0));
    for (let i = 0; i <= m; ++i) {
        cost[i][0] = i;
    }
    for (let j = 0; j <= n; ++j) {
        cost[0][j] = j;
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (word1[i - 1] === word2[j - 1]) {
                cost[i][j] = cost[i - 1][j - 1];
            } else {
                cost[i][j] = 1 + Math.min(cost[i - 1][j - 1], cost[i][j - 1], cost[i - 1][j]);
            }
        }
    }
    return cost[m][n];
};

// word1 = "intention", word2 = "execution"
minDistance("intention", "execution");
// @lc code=end

