/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 * 
给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。
注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

示例 1：
输入：a = "abcd", b = "cdabcdab"
输出：3
解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。

示例 2：
输入：a = "a", b = "aa"
输出：2

示例 3：
输入：a = "a", b = "a"
输出：1

示例 4：
输入：a = "abc", b = "wxyz"
输出：-1

1 <= a.length <= 104
1 <= b.length <= 104
a 和 b 由小写英文字母组成

 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let hashA = Array(26).fill(0)
    let hashB = Array(26).fill(0)
    for (let i = 0; i < a.length; i++) {
        hashA[a.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < b.length; i++) {
        hashB[b.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < hashA.length; i++) {
        if (hashB[i] && !hashA[i]) {
            return -1
        }
    }
    let minTimes = Math.ceil(b.length / a.length)
    let fakeA = a.padEnd(a.length * minTimes, a)
    if (fakeA.indexOf(b) !== -1) {
        return minTimes
    } else {
        minTimes++
        fakeA = a.padEnd(a.length * minTimes, a)
        if (fakeA.indexOf(b) !== -1) {
            return minTimes
        }
    }
    return -1
};
// @lc code=end

var a = "aaaaaaaaaaaaaaaaaaaaaab", b = "ba"
let res = repeatedStringMatch(a, b)
console.log('res :>> ', res);