/*
 * @lc app=leetcode id=576 lang=javascript
 *
 * [576] Out of Boundary Paths
 * 给定一个 m × n 的网格和一个球。
 * 球的起始坐标为 (i,j) ，你可以将球移到相邻的单元格内，
 * 或者往上、下、左、右四个方向上移动使球穿过网格边界。
 * 但是，你最多可以移动 N 次。找出可以将球移出边界的路径数量。
 * 答案可能非常大，返回 结果 mod 109 + 7 的值。
 * 输入: m = 2, n = 2, N = 2, i = 0, j = 0  输出: 6
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let mod = 1e9 + 7;
    let map = new Map();
    const helper = (currRow, currColumn, moveRemain) => {
        let key = `${currRow}_${currColumn}_${moveRemain}`;
        if (map.has(key)) {
            return map.get(key);
        }
        let ans = 0;
        if (currRow >= 0 && currColumn >= 0 && currRow < m && currColumn < n) {
            if (moveRemain > 0) {
                ans += helper(currRow + 1, currColumn, moveRemain - 1) % mod;
                ans += helper(currRow - 1, currColumn, moveRemain - 1) % mod;
                ans += helper(currRow, currColumn + 1, moveRemain - 1) % mod;
                ans += helper(currRow, currColumn - 1, moveRemain - 1) % mod;
                map.set(key, ans);
                return ans;
            } else {
                return 0;
            }
        } else {
            return 1;
        }
    };
    let res = helper(startRow, startColumn, maxMove);
    return res % mod;
};
// @lc code=end

// findPaths(2, 2, 2, 0, 0);
// findPaths(1, 3, 3, 0, 1);
findPaths(3
    , 3
    , 40
    , 0
    , 0);
// 输入: m = 1, n = 3, N = 3, i = 0, j = 1
// 输出: 12