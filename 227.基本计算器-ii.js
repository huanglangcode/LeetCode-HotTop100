/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 * 
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
整数除法仅保留整数部分。
你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。
注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

示例 1：
输入：s = "3+2*2"
输出：7
示例 2：
输入：s = " 3/2 "
输出：1
示例 3：
输入：s = " 3+5 / 2 "
输出：5
 
提示：
1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数
 */

const lowLevel = new Set(['+', '-'])
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.replace(/\s/g, '')
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (lowLevel.has(s[i])) {
            stack.push(s[i])
        } else if (Number.isInteger(+s[i])) {
            let temp = ''
            while (Number.isInteger(+s[i])) {
                temp += s[i]
                i++
            }
            stack.push(temp)
            i -= 1
        } else {
            let last = stack.pop()
            let symbol = s[i]
            let curr = ''
            while (Number.isInteger(+s[i + 1])) {
                curr += s[i + 1]
                i++
            }
            if (symbol === '*') {
                stack.push(+last * +curr)
            } else {
                stack.push(Number.parseInt(+last / +curr))
            }
        }
    }
    let res = +stack[0]
    for (let i = 1; i < stack.length; i += 2) {
        let symbol = stack[i]
        let num2 = stack[i + 1]
        if (symbol === '+') {
            res += +num2
        } else {
            res -= +num2
        }
    }
    return res
};
// @lc code=end

var s = "1-1+1"
let res = calculate(s)
console.log('res === 104', res === 851858);