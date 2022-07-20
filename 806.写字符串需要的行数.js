/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let width = 0,
        rows = 1
    for (let i = 0; i < s.length; i++) {
        const curr = widths[s.charCodeAt(i) - 'a'.charCodeAt()]
        if (curr + width > 100) {
            width = curr
            rows++
        } else {
            width += curr
        }
    }
    return [rows, width]
};
// @lc code=end

var widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    S = "bbbcccdddaaa"

numberOfLines(widths, S)