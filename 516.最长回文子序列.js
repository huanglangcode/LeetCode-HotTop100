/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeSubseq = function (s) {
    let dp = [...Array(s.length)].map(_ => Array(s.length).fill(0));
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < s.length; j++) {
            if (i > j) {
                dp[i][j] = 0;
            } else if (i === j) {
                dp[i][j] = 1;
            } else if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }
    return dp[0][s.length - 1];
};
longestPalindromeSubseq("aabbca");

/*
var longestPalindromeSubseq = function (s) {
    let hash = {};
    const helper = (i, j) => {
        let key = `${i}_${j}`;
        if (i > j) return 0;
        if (Number.isInteger(hash[key])) {
            return hash[key];
        }
        if (i === j) return 1;
        let ans = 0;
        if (s[i] === s[j]) {
            ans = helper(i + 1, j - 1) + 2;
        } else {
            ans = Math.max(helper(i, j - 1), helper(i + 1, j));
        }
        hash[key] = ans;
        return ans;
    };
    return helper(0, s.length - 1);
};*/
// @lc code=end
