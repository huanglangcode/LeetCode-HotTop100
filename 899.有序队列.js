/*
 * @lc app=leetcode.cn id=899 lang=javascript
 *
 * [899] 有序队列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    if (k > 1) {
        return s.split("").sort((a, b) => a.localeCompare(b)).join("")
    }
    let min = s
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s.slice(0, 1)
        if (s.localeCompare(min) < 0) {
            min = s
        }
    }
    return min
};
// @lc code=end

var s = "acbadbaeb", k = 1

let r = orderlyQueue(s, k)
console.log('r', r)   // "acbadbaeb"