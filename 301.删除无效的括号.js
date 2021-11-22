/*
 * @lc app=leetcode.cn id=301 lang=javascript
给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
返回所有可能的结果。答案可以按 任意顺序 返回。
 * [301] 删除无效的括号
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let rightStack = 0
    let leftStack = 0
    for (const c of s) {
        if (c === '(') {
            rightStack++
        } else if (c === ')') {
            if (rightStack) {
                rightStack--
            } else {
                leftStack++
            }
        }
    }
    if (!rightStack && !leftStack) {
        return [s]
    }
    let res = new Set()
    let arr = s.split("")
    const helper = (rRemain, lRemain, idx, arr) => {
        if (!rRemain && !lRemain) {
            const toBeCheck = arr.join("")
            if (check(toBeCheck)) {
                res.add(toBeCheck)
            }
        } else {
            for (let i = idx; i < arr.length; i++) {
                if (arr[i] === '(' && rRemain) {
                    arr.splice(i, 1)
                    helper(rRemain - 1, lRemain, i, arr)
                    arr.splice(i, 0, "(")
                } else if (arr[i] === ')' && lRemain) {
                    arr.splice(i, 1)
                    helper(rRemain, lRemain - 1, i, arr)
                    arr.splice(i, 0, ")")
                }
            }
        }
    }
    helper(rightStack, leftStack, 0, arr)
    return [...res]
};

const check = (s) => {
    let rightStack = 0
    for (const c of s) {
        if (c === '(') {
            rightStack++
        } else if (c === ')') {
            if (rightStack) {
                rightStack--
            } else {
                return false
            }
        }
    }
    if (!rightStack) {
        return true
    }
    return false
}
// @lc code=end

const s = "(a)())()"
let res = removeInvalidParentheses(s)
console.log('res :>> ', res);