/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let min = 0, max = s.length, res = new Array(s.length + 1)
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === 'I') {
            res[i] = min++
        } else {
            res[i] = max--
        } 
    }
    return res
};
// @lc code=end

var s = "DDI"

let res = diStringMatch(s)
console.log('res :>> ', res);