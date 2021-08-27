/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let times = 0
    let ans = ''
    for (let i = 0; i < s.length; i += k) {
        let curr = s.slice(i, i + k)
        if ((times & 1) === 0) {
            ans = ans.concat(curr.split('').reverse().join(''))
        } else {
            ans = ans.concat(curr)
        }
        times++
    }
    return ans
};
// @lc code=end
reverseStr('abcdefgk', 3)
// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"