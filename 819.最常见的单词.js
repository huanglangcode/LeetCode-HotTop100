/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * !?',;.
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const set = new Set(banned)
    return [...paragraph.split(/\W/).filter(_ => !!_).map((item) => item.toLowerCase())
        .reduce((map, curr) => { if (!set.has(curr)) map.set(curr, map.get(curr) + 1 || 1); return map }, new Map())].sort((a, b) => b[1] - a[1])[0][0]
};
// @lc code=end



var paragraph = "a, a, a, a, b,b,b,c, c",
    banned = ["a"]

let res = mostCommonWord(paragraph, banned)
console.log('res :>> ', res);