/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    let dp = new Array(26).fill(0)
    dp[p.charCodeAt(0) - 'a'.charCodeAt()] = 1
    let curr = 1
    for (let i = 1; i < p.length; i++) {
        if (p.charCodeAt(i) === p.charCodeAt(i - 1) + 1 || p.charCodeAt(i) === p.charCodeAt(i - 1) - 25) {
            curr++
        } else {
            curr = 1
        }
        let idx = p.charCodeAt(i) - 'a'.charCodeAt()
        dp[idx] = Math.max(curr, dp[idx])
    }
    return dp.reduce((a, b) => a + b)
};
// @lc code=end

var p = "fgefabcabcde"

/** 
 * a
 * b
 * c
 * ab
 * abc
 * bc
 * d
 * abcd
 * cd
 * bcd
*/

let res = findSubstringInWraproundString(p)
console.log('res :>> ', res);