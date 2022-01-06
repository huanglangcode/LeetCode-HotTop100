/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    return ((new Date(date) - new Date(date.slice(0, 4))) + 86400000) / 86400000;
};
// @lc code=end
