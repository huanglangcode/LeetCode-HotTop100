/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let p = new Array(matrix[0].length).fill(0);
    let res = 0;
    for (let i = 0; i < matrix.length; i++) {
        let curr = matrix[i];
        for (let j = 0; j < p.length; j++) {
            if (!p[j]) {
                p[j] = +curr[j];
            } else {
                p[j] = +curr[j] === 1 ? p[j] + +curr[j] : 0;
            }
        }
        const q = largestRectangleArea(p);
        res = Math.max(q, res);
    }
    return res;
};
.
var largestRectangleArea = function (heights) {
    heights.unshift(0);
    heights.push(0);
    let stack = [];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let stackTopIdx = stack.pop();
            // 宽
            let stackTopVal = heights[stackTopIdx];
            // 长
            let width = i - stack[stack.length - 1] - 1;
            res = Math.max(res, stackTopVal * width);
        }
        stack.push(i);
    }
    heights.shift();
    heights.pop();
    return res;
};
// @lc code=end


//   1 0 1 0 0
//   1 0 1 1 1
//   1 1 1 1 1
//   1 0 0 1 0

maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]);