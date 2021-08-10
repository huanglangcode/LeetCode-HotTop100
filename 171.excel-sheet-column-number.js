/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let ans = 0;
    let pow = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let curr = columnTitle.charCodeAt(i) - 64;
        ans += (Math.pow(26, pow++) * curr);
    }
    return ans;
};
// @lc code=end

titleToNumber('ZY');