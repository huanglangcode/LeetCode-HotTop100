/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 * 如果方程没有解，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
    const [left, right] = equation.split("=")
    // 将右边的X和左边的合并. 将左边的数字和右边合并
    const helper = (input) => {
        let cursor = 0
        let varExp = '', numExp = '', opExp = []
        while (cursor < input.length) {
            if (input[cursor] === 'x') {
                if (opExp.length) {
                    varExp += opExp.pop()
                }
                varExp += '1'
                cursor++
            } else if (input[cursor] >= '0' && input[cursor] <= '9') {
                let temp = ''
                if (opExp.length) {
                    temp += opExp.pop()
                }
                while ((input[cursor] >= '0' && input[cursor] <= '9') && cursor < input.length) {
                    temp += input[cursor++]
                }
                if (input[cursor] === 'x') {
                    varExp += temp
                    cursor++
                } else {
                    numExp += temp
                }
            } else if (input[cursor] === '+' || input[cursor] === '-') {
                opExp.push(input[cursor])
                cursor++
            }
        }
        return [varExp, numExp]
    }
    const [varExp1, numExp1] = helper(left)
    const [varExp2, numExp2] = helper(right)
    const factor1 = eval(varExp1) || 0
    const factor2 = eval(varExp2) || 0
    const factor = factor1 - factor2
    const num1 = eval(numExp1) || 0
    const num2 = eval(numExp2) || 0
    if (factor1 === factor2) {
        if (num1 !== num2) return "No solution"
        return "Infinite solutions"
    }
    const num = num2 - num1
    return 'x=' + num / factor
};
// @lc code=end

var equation = "-x=-1"

let res = solveEquation(equation)
console.log('res', res)

// function* lexer(str) {
//     let cursor = 0
//     let char = str[cursor]

//     function next() {
//         char = str[cursor++]
//     }

//     function number() {
//         let buffer = ''
//         while (char >= '1' && char <= '9') {
//             buffer += char
//             next()
//         }
//         if (buffer.length) {
//             return {
//                 type: 'number',
//                 value: buffer
//             }
//         }
//         return null
//     }

//     function variable() {
//         let buffer = ''
//         while (char === 'x') {
//             buffer += char
//             next()
//         }
//         if (buffer.length) {
//             return {
//                 type: 'number',
//                 value: buffer
//             }
//         }
//         return null
//     }

//     function op() {
//         let opSet = new Set(['+', '-', '*', '/'])
//         let token = null
//         if (opSet.has(char)) {
//             token = {
//                 type: 'op',
//                 value: char
//             }
//         }
//         next()
//         return token
//     }

//     function whiteSpace() {
//         let buffer = ''
//         while (char === '' || char === '\t') {
//             buffer += char
//             next()
//         }
//         if (buffer.length) {
//             return {
//                 type: 'whitespace',
//                 value: buffer
//             }
//         }
//         return null
//     }

//     function eof() {
//         if (char === undefined) {
//             return {
//                 type: 'EOF'
//             }
//         }
//     }

//     while (true) {
//         const token = variable() || op() || number() || whiteSpace() || eof()
//         if (token) {
//             yield token
//             if (token.type === 'EOF') break
//         } else {
//             throw new SyntaxError(`unexpected character ${char} at ${cursor + 1}`)
//         }

//     }
// }


// for (const token of lexer(equation)) {
//     console.log('token', token)
// }