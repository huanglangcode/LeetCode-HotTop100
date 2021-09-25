/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */
/**
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * 示例：
 * 输入: "sea", "eat"
 * 输出: 2
 * 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
 */
// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
    let m = word1.length
    let n = word2.length
    let dp = [...Array(m + 1)].map(_ => Array(n + 1).fill(0))
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
            }
        }
    }
    return dp[m][n]
};

/**
 *   " e a t w
 * " 0 1 2 3 4
 * s 1 2 3 4 5
 * e 2 1 2 3 4 
 * a 3 2 1 2 3
 */

// @lc code=end

minDistance("sea", "eatw")