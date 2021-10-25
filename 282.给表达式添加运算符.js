/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

const symbols = ["+", "-", "*"]
var addOperators = function (num, target) {
    let ans = []
    const helper = (idx, curr) => {
        if (idx < num.length) {
            for (let i = idx + 1; i <= num.length; i++) {
                let temp = num.slice(idx, i)
                if (temp.startsWith("0") && temp.length > 1) {
                    continue
                }
                if (i === num.length && eval(curr + temp) === target) {
                    ans.push(curr + temp)
                } else {
                    for (const symbol of symbols) {
                        helper(i, curr + temp + symbol)
                    }
                }
            }
        }
    }
    helper(0, "")
    return ans
};
// @lc code=end
console.time("addOperators")
let ans = addOperators("2147483647", 2147483647)
console.timeEnd("addOperators")
console.log(' ans :>> ', ans);