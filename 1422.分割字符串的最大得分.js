/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let n = s.length, zeroCnt = new Array(n).fill(0), oneCnt = new Array(n).fill(0)
    zeroCnt[0] = s[0] === '0' ? 1 : 0
    oneCnt[n - 1] = s[n - 1] === '1' ? 1 : 0
    for (let i = 1; i < n; i++) {
        zeroCnt[i] = s[i] === '0' ? zeroCnt[i - 1] + 1 : zeroCnt[i - 1]
        oneCnt[n - 1 - i] = s[n - 1 - i] === '1' ? oneCnt[n - i] + 1 : oneCnt[n - i]
    }
    // 分割成两个 非空 子字符串 处理下边界情况
    if (s[n - 1] === '0') zeroCnt[n - 1] -= 1
    if (s[0] === '1') oneCnt[0] -= 1
    let max = 0
    for (let i = 0; i < n; i++) {
        max = Math.max(max, zeroCnt[i] + oneCnt[i])
    }
    return max
};
// @lc code=end


var s = "01"

let res = maxScore(s)
console.log('res', res)