/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    //  下标8  左边最近为6 右边最近为11
    const leftArr = new Array(s.length).fill(Infinity)
    const rightArr = new Array(s.length).fill(Infinity)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            leftArr[i] = i
        } else {
            leftArr[i] = Number.isInteger(leftArr[i - 1]) ? leftArr[i - 1] : +Infinity
        }
        if (s[s.length - 1 - i] === c) {
            rightArr[s.length - 1 - i] = s.length - 1 - i
        } else {
            rightArr[s.length - 1 - i] = Number.isInteger(rightArr[s.length - i]) ? rightArr[s.length - i] : rightArr[s.length - i] || +Infinity
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            leftArr[i] = 0
        } else {
            leftArr[i] = Math.min(Math.abs(i - leftArr[i]), Math.abs(i - rightArr[i]))
        }
    }
    return leftArr
};
// @lc code=end


var s = "loveleetcode", c = "e"
s = "baaa", c = "b"
let res = shortestToChar(s, c)
console.log('res :>> ', res);