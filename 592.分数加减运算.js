/*
 * @lc app=leetcode.cn id=592 lang=javascript
 *
 * [592] 分数加减运算
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    let nums = []
    let matchedNum = expression.match(/\d+/g)
    for (let i = 0; i < matchedNum.length; i += 2) {
        nums.push([matchedNum[i], matchedNum[i + 1]])
    }
    let ops = expression.match(/\+|-/g) || []
    if (ops.length < nums.length) { ops.unshift('+') }
    let father = nums[0][1]
    for (let i = 1; i < nums.length; i++) {
        father = scm(father, nums[i][1])
    }
    let son = 0
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i][0] === 0 ? 0 : nums[i][0] * (father / nums[i][1])
        let op = ops[i]
        if (op === '-') {
            son -= curr
        } else {
            son += curr
        }
    }
    let res = ""
    if (son < 0) {
        son = -son
        res += "-"
    }
    let cd = gcd(father, son)
    return res + `${son / cd}/${father / cd}`
};
// @lc code=end
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, parseInt(a % b));
}

function scm(a, b) {
    if (a === 0 && b === 0) return 1
    if (a === 0) return b
    if (b === 0) return a
    return (a * b) / gcd(a, b);
}

var expression = "4/5"

let res = fractionAddition(expression)
console.log('res :>> ', res);