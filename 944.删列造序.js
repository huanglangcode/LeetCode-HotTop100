/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let m = strs.length, n = strs[0].length
    let res = 0
    for (let i = 0; i < n; i++) {
        let pre = 'a'.charCodeAt() - 1
        for (let j = 0; j < m; j++) {
            let val = strs[j][i].charCodeAt()
            if (val < pre) {
                res++
                break
            }
            pre = val
        }
    }
    return res
};
// @lc code=end


var strs = ["a", "b"]

let r = minDeletionSize(strs)
console.log('r :>> ', r);