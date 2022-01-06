/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekArr[new Date(`${year}-${month}-${day}`).getDay()]
};
// @lc code=end

var day = 31, month = 8, year = 2019
let r = dayOfTheWeek(day, month, year)
console.log('r :>> ', r);