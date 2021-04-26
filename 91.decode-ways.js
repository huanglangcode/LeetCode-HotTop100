/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] === "0") return 0;
    s = "_" + s;
    let dp = new Array(s.length);
    dp[0] = 1;
    for (let i = 1; i < s.length; i++) {
        let pre = parseInt(s[i - 1]);
        let curr = parseInt(s[i]);
        if ((pre > 2 || pre === 0) && curr === 0) {
            return 0;
        }
        if (pre === 0) {
            dp[i] = dp[i - 1];
        } else if (curr === 0) {
            dp[i] = dp[i - 2];
        } else if (pre === 1 || (pre === 2 && curr <= 6)) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    console.log("dp :>> ", dp);
    return dp[dp.length - 1];
};

// numDecodings("20273101121121121");
numDecodings("12");
// @lc code=end

