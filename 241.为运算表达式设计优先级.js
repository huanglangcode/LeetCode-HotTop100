/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
    输入：expression = "2*3-4*5"
    输出：[-34,-14,-10,-10,10]
    解释：
    (2*(3-(4*5))) = -34 
    ((2*3)-(4*5)) = -14 
    ((2*(3-4))*5) = -10 
    (2*((3-4)*5)) = -10 
    (((2*3)-4)*5) = 10
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let res = []
    for (let i = 0; i < expression.length; i++) {
        if (isNaN(expression[i])) {
            const leftRes = diffWaysToCompute(expression.slice(0, i))
            const op = expression[i]
            const rightRes = diffWaysToCompute(expression.slice(i + 1))
            for (const left of leftRes) {
                for (const right of rightRes) {
                    res.push(eval(`${+left} ${op} ${+right}`))
                }
            }
        }
    }
    return res.length > 0 ? res : [expression]
};
// @lc code=end

var expression = "2-1-1-1-1"

let res = diffWaysToCompute(expression)
console.log('res :>> ', res);

/**
 *  *
 * 2 3-4*5
 *    -
 *   3 4*5
 *      
 *  *  
 * 2 3-4*5
 *      *
 *   3-4 5   
 * 
 * 
 * 2 - 
 */