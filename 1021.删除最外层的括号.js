/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    const ans = new Array(), n = s.length
    for (let i = 0, j = 0, cur = 0; i < n; i = j) {
        j++
        cur++
        while (j < n && cur > 0) {
            cur += s.charCodeAt(j) == '('.charCodeAt(0) ? 1 : -1
            j++
        }
        ans.push(s.substring(i + 1, j - 1))
    }
    return ans.join('')
};
// @lc code=end


var s = "(()())(())(()(()))"

let res = removeOuterParentheses(s)
console.log('res :>> ', res);