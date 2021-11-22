/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
给你一个数组 rectangles ，其中 rectangles[i] = [x1, y1, x2, y2] 表示一个坐标轴平行的矩形。
这个矩形的左下顶点是 (x1, y1) ，右上顶点是 (x2, y2) 。
如果所有矩形一起精确覆盖了某个矩形区域，则返回 true ；否则，返回 false 。
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
    let sum = 0
    let a1 = [1e7, 1e7], a2 = [1e7, -1e7], b1 = [-1e7, 1e7], b2 = [-1e7, -1e7]
    let set = new Set()
    const helper = (ele) => {
        const s1 = ele.join("_")
        if (!set.has(s1)) {
            set.add(s1)
        } else {
            set.delete(s1)
        }
    }
    for (let i = 0; i < rectangles.length; i++) {
        const [x1, y1, x2, y2] = rectangles[i]
        sum += (x2 - x1) * (y2 - y1)
        if (x1 <= a1[0] && y1 <= a1[1]) {
            a1 = [x1, y1]
        }
        if (x1 <= a2[0] && y2 >= a2[1]) {
            a2 = [x1, y2]
        }
        if (x2 >= b1[0] && y1 <= b1[1]) {
            b1 = [x2, y1]
        }
        if (x2 >= b2[0] && y2 >= b2[1]) {
            b2 = [x2, y2]
        }
        // 将坐标转成string
        helper([x1, y1])
        helper([x1, y2])
        helper([x2, y1])
        helper([x2, y2])
    }
    for (const ele of [a1, a2, b1, b2]) {
        if (!set.has(ele.join("_"))) {
            return false
        }
    }
    if (set.size !== 4 || a1[0] !== a2[0] || a1[1] !== b1[1] || a2[1] !== b2[1] || b1[0] !== b2[0]) {
        return false
    }
    return (b2[1] - a1[1]) * (b2[0] - a1[0]) === sum
};
// @lc code=end

let rectangles = [[0, 0, 1, 1], [0, 0, 2, 1], [1, 0, 2, 1], [0, 2, 2, 3]]
let res = isRectangleCover(rectangles)
console.log('res :>> ', res);