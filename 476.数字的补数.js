/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let d = 2;
    while (d <= num) {
        d *= 2;
    }
    return d - num - 1;
};
// @lc code=end

let res = findComplement(5)
console.log('res :>> ', res);
// 1 0 1