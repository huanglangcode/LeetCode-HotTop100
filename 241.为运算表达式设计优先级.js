/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 * 
 * 
 * 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。你可以 按任意顺序 返回答案。
示例 1：
输入：expression = "2-1-1"
输出：[0,2]
解释：
((2-1)-1) = 0 
(2-(1-1)) = 2

示例 2：
输入：expression = "2*3-4*5"
输出：[-34,-14,-10,-10,10]
解释：
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10

提示：
1 <= expression.length <= 20
expression 由数字和算符 '+'、'-' 和 '*' 组成。
输入表达式中的所有整数值在范围 [0, 99] 
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    const arr = parse(expression)
    const helper = (input) => {
        if (input.length === 1) {
            return input
        }
        let ans = []
        for (let i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                const left = helper(input.slice(0, i))
                const right = helper(input.slice(i + 1))
                for (const l of left) {
                    for (const r of right) {
                        let res = calc(l, r, input[i])
                        ans.push(res)
                    }
                }
            }
        }
        return ans
    }
    return helper(arr)
}

const calc = (l, r, op) => {
    if (op === '*') {
        return +l * +r
    } else if (op === '+') {
        return +l + +r
    } else if (op === '-') {
        return +l - +r
    }
}

const parse = (expression) => {
    let n = expression.length
    let arr = []
    for (let i = 0; i < n; i++) {
        if (expression[i] === '*' || expression[i] === '+' || expression[i] === '-') {
            arr.push(expression[i])
        } else {
            let item = expression[i]
            while (Number.isInteger(+expression[i + 1])) {
                item += expression[i + 1]
                i++
            }
            arr.push(item)
        }
    }
    return arr
}
// @lc code=end
var expression = "2*3-4*5"

let res = diffWaysToCompute(expression)
console.log('res', res);