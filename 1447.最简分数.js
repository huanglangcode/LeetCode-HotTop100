/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
示例 1：
输入：n = 2
输出：["1/2"]
解释："1/2" 是唯一一个分母小于等于 2 的最简分数。

示例 2：
输入：n = 3
输出：["1/2","1/3","2/3"]

示例 3：
输入：n = 4
输出：["1/2","1/3","1/4","2/3","3/4"]
解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。

示例 4：
输入：n = 1
输出：[]

提示：
1 <= n <= 100
 */


// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    let res = []
    if (n === 1) { return res }
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (gcd(j, i) === 1) {
                res.push(`${j}/${i}`)
            }
        }
    }
    return res
};
// @lc code=end

var n = 6
let res = simplifiedFractions(n)
console.log('res :>> ', res);