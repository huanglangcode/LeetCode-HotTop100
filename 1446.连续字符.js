/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 * 
给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
请你返回字符串的能量。

示例 1：

输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。

示例 2：

输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let i = 0, j = 1
    let res = 1
    let count = 1
    while (i < j && j < s.length) {
        count = s[i] === s[j] ? count + 1 : 1
        res = Math.max(res, count)
        i++
        j++
    }
    return res
};
// @lc code=end
var s = 'leetcode'
let res = maxPower(s)
console.log('res :>> ', res);