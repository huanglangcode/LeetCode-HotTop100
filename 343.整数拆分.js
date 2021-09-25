/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let half = n >> 1
    let hash = new Map()
    const helper = (used, val) => {
        let key = `${used}_${val}`
        if (hash.has(key)) {
            return hash.get(key)
        }
        if (used === n) {
            return val
        }
        let res = 1
        for (let i = 1; i <= half + 1 && i < n; i++) {
            if (used + i <= n) {
                res = Math.max(helper(used + i, val * i), res)
            }
        }
        hash.set(key, res)
        return res
    }
    return helper(0, 1)
};
// @lc code=end
let val = 58
console.time(`calc: ${val}`)
integerBreak(val)
console.timeEnd(`calc: ${val}`)

// 1549681956