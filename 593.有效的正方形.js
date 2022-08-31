/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    let d1 = calculate(p1, p2)
    if (!d1) return false // 防止全部为0
    let d2 = calculate(p1, p3)
    let d3 = calculate(p1, p4)
    let d4 = calculate(p2, p3)
    let d5 = calculate(p2, p4)
    let d6 = calculate(p3, p4)
    let arr = [d1, d2, d3, d4, d5, d6].sort((a, b) => a - b)
    return (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3] && arr[4] === arr[5] && (arr[0] + arr[1] === arr[5]))
};
// @lc code=end

var calculate = function (a, b) {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return (x1 - x2) ** 2 + (y1 - y2) ** 2
};

var p1 = [-1, -1], p2 = [1, 1], p3 = [1, -1], p4 = [-1, 1]

let res = validSquare(p1, p2, p3, p4);
console.log('res :>> ', res);