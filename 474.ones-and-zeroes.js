/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let dp = new Array(strs.length + 1).fill(0)
    for (let i = 0; i < strs.length; i++) {
        
    }
};
var helper = (ele) => {
    let curM = 0
    let curN = 0
    for (let c of ele) {
        c === '0' ? curM++ : curN++
    }
    return [curM, curN]
}
// @lc code=end

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)