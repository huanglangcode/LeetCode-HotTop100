/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
1 <= pushed.length <= 1000
0 <= pushed[i] <= 1000
pushed 的所有元素 互不相同
popped.length == pushed.length
popped 是 pushed 的一个排列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stack = []
    let i = 0
    for (const el of pushed) {
        stack.push(el)
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    return pushed.length === i
};
// @lc code=end

var pushed = [2, 1, 3, 0], popped = [1, 0, 3, 2]


// pushed = [0, 2, 1], popped = [0, 1, 2]

let res = validateStackSequences(pushed, popped)
console.log('res', res)