/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 * 
如果从坐标[0,0]开始思考，你会发现，你既要记录沿途的最小血量 
又要记录到[i,j]还剩多少血量，而且扯不清
所以，我们逆向思考一下
能不能先算[i,j]到终点需要的最小血量，这样DP到[0,0]点就是我们要的答案？
答案是肯定的，见代码中详细注释。
 */
var calculateMinimumHP = function (dungeon) {
    let m = dungeon.length, n = dungeon[0].length;
    let dp = [...new Array(m)].map(_ => new Array(n));
    dp[m - 1][n - 1] = dungeon[m - 1][n - 1] > 0 ? 1 : 1 - dungeon[m - 1][n - 1]
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i < m - 1 && j < n - 1) {
                dp[i][j] = Math.max(1, -(dungeon[i][j] - Math.min(dp[i + 1][j], dp[i][j + 1])));
            } else if (i < m - 1) {
                dp[i][j] = Math.max(1, -(dungeon[i][j] - dp[i + 1][j]))
            } else if (j < n - 1) {
                dp[i][j] = Math.max(1, -(dungeon[i][j] - dp[i][j + 1]))
            }
        }
    }
    return dp[0][0]
};
// @lc code=end

calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
])

// 7(8)  5   2
// 6    11   5
// 1     1   6 