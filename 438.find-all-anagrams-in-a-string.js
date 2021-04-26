/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// s: "cbaebabacd" p: "abc"
var findAnagrams = function (s, p) {
    // s: "cbaebabacd" p: "abc"
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

findAnagrams("abacbabc", "abc")
// @lc code=end

