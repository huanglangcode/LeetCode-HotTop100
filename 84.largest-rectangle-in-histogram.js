/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
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
    return res;
};

// @lc code=end

largestRectangleArea([2, 1, 5, 6, 2, 3]);


//  0 0 0 1 0 0
//  0 0 1 1 0 0
//  0 0 1 1 0 0
//  0 0 1 1 0 1
//  1 0 1 1 1 1
//  1 1 1 1 1 1