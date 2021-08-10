/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length;
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i - 1][j];
            } else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
            } else {
                triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        ans = Math.min(triangle[n - 1][i], ans);
    }
    console.log('ans :>> ', ans);
    return ans;
};
// @lc code=end

var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
minimumTotal(triangle);