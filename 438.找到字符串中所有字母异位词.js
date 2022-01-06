/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
给定两个字符串 s 和 p，
找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。
不考虑答案输出的顺序。
异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

示例 1:
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let hash = {}
    let similarity = 0
    let initArr = new Array(p.length)
    for (let i = 0; i < p.length; i++) {
        !!hash[p[i]] ? hash[p[i]]++ : hash[p[i]] = 1
        initArr[i] = s[i]
    }
    for (let i = 0; i < p.length; i++) {
        if (Number.isInteger(hash[initArr[i]])) {
            similarity++
            hash[initArr[i]]--
        }
    }
    console.log('hash :>> ', hash);
    console.log('initArr :>> ', initArr);
    console.log('similarity :>> ', similarity);
    let res = []
    if (similarity === p.length && Object.values(hash).findIndex(ele => ele !== 0) === -1) {
        res.push(0)
    }
    for (let i = 1; i <= s.length - p.length; i++) {
        const curr = s[p.length + i - 1]
        const last = initArr.shift()
        initArr.push(curr)
        if (Number.isInteger(hash[last])) {
            similarity--
            hash[last]++
        }
        if (Number.isInteger(hash[curr])) {
            similarity++
            hash[curr]--
        }
        if (similarity === p.length && Object.values(hash).findIndex(ele => ele !== 0) === -1) {
            res.push(i)
        }
    }
    console.log('res :>> ', res);
    return res
};
// @lc code=end

findAnagrams("cbaebabacd", "abc")