/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let res = "";
    while (columnNumber > 26) {
        let left = columnNumber % 26;
        if (left === 0) {
            res += 'Z';
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            res += String.fromCharCode(left + 64);
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    if (columnNumber) {
        res += String.fromCharCode(columnNumber + 64);
    }
    console.log('object :>> ', res.split("").reverse().join(""));
};
// @lc code=end
convertToTitle(2147483647);
convertToTitle(1);
convertToTitle(28);
convertToTitle(701);
convertToTitle(676);
convertToTitle(52);
convertToTitle(53);
// Input: columnNumber = 2147483647
// Output: "FXSHRXW"
