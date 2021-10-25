/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const area1 = (ax2 - ax1) * (ay2 - ay1)
    const area2 = (bx2 - bx1) * (by2 - by1)
    let overLayX = helper(ax1, ax2, bx1, bx2)
    let overLayY = helper(ay1, ay2, by1, by2)
    return area1 + area2 - overLayX * overLayY
};

var helper = (a1, a2, b1, b2) => {
    if (a1 > b1) {
        return helper(b1, b2, a1, a2)
    }
    return b1 >= a2 ? 0 : (a2 < b2 ? a2 - b1 : b2 - b1)
}
// @lc code=end

/*
输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
输出：45

输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
输出：16
*/
let ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2


let res = computeArea(0,
    0,
    0,
    0,
    -1,
    -1,
    1,
    1)
console.log('res :>> ', res);