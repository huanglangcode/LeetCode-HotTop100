/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let blankCnt = 0
    for (const c of text) {
        if (c === " ") blankCnt++
    }
    const arr = text.trim().split(/\s+/g)
    if (arr.length === 1) return arr[0] + "".padStart(blankCnt, " ")
    const padNum = Math.floor(blankCnt / (arr.length - 1))
    return arr.join("".padStart(padNum, " ")) + "".padStart(blankCnt % (arr.length - 1), " ")
};
// @lc code=end

var text = "a"
let res = reorderSpaces(text)
console.log('res', res, "res")