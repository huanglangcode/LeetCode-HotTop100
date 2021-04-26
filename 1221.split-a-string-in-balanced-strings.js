/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let result = 0;
    let Lcount = 0;
    let Rcount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            Lcount++;
        }
        if (s[i] === "R") {
            Rcount++;
        }
        if (Lcount === Rcount) {
            result++;
            Lcount = 0;
            Rcount = 0;
        }
    }
    return result;
};
// @lc code=end

balancedStringSplit("RLRRRLLRLL");