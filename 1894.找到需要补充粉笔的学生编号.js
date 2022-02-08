/*
 * @lc app=leetcode.cn id=1894 lang=javascript
 *
 * [1894] 找到需要补充粉笔的学生编号
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    let sum = chalk.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    let left = k % sum
    for (let i = 0; i < chalk.length; i++) {
        left -= chalk[i]
        if (left < 0) {
            return i
        }
    }
};
// @lc code=end

var chalk = [5, 1, 5], k = 22
let idx = chalkReplacer(chalk, k)
console.log('res :>> ', idx);