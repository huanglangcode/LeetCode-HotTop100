/*
 * @lc app=leetcode.cn id=2028 lang=javascript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const s = (rolls.length + n) * mean - rolls.reduce((acc, curr) => acc += curr, 0)
    if (s > n * 6 || s < n) return []
    const res = new Array(n).fill(Math.floor(s / n))
    for (let i = 0; i < s % n; i++)
        res[i]++
    return res
};
// @lc code=end

var rolls = [4, 5, 6, 2, 3, 6, 5, 4, 6, 4, 5, 1, 6, 3, 1, 4, 5, 5, 3, 2, 3, 5, 3, 2, 1, 5, 4, 3, 5, 1, 5],
    mean = 4,
    n = 40
// 32 - 
let res = missingRolls(rolls, mean, n)
console.log('res', res);

/**
 * 17 安排进 10    
 */