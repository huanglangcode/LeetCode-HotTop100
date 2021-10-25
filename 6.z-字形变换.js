/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    let storage = [...Array(numRows)].map(_ => new Array())
    let flag = true, level = 0
    for (let i = 0; i < s.length; i++) {
        storage[level].push(s[i])
        if (flag) {
            if (level++ === numRows - 1) {
                flag = !flag
                level -= 2
            }
        } else {
            if (level-- === 0) {
                flag = !flag
                level += 2
            }
        }
    }
    return storage.reduce((acc, curr) => {
        acc += curr.join("")
        return acc
    }, "")
};
// @lc code=end

let res = convert("PAYPALISHIRING", 2)
console.log('res :>> ', res);