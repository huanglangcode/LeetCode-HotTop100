/*
 * @lc app=leetcode.cn id=407 lang=javascript
 
 * [407] 接雨水 II

给你一个 m x n 的矩阵，其中的值均为非负整数，
代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。

输入: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
输出: 4
解释: 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。

 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    let res = 0
    for (let i = 1; i < heightMap.length - 1; i++) {
        for (let j = 1; j < heightMap[0].length - 1; j++) {
            let max1 = 0
            for (let l = 0; l < j; l++) {
                max1 = Math.max(max1, heightMap[i][l])
            }
            let max2 = 0
            for (let r = j + 1; r < heightMap[0].length; r++) {
                max2 = Math.max(max2, heightMap[i][r])
            }
            let max3 = 0
            for (let u = 0; u < i; u++) {
                max3 = Math.max(max3, heightMap[u][j])
            }
            let max4 = 0
            for (let d = i; d < heightMap.length; d++) {
                max4 = Math.max(max4, heightMap[d][j])
            }
            let height = Math.min(max1, max2, max3, max4)
            if (height - heightMap[i][j] > 0) {
                res += height - heightMap[i][j]
            }
        }
    }
    return res
};
// @lc code=end

trapRainWater([
    [12, 13, 01, 12],
    [13, 04, 13, 12],
    [13, 08, 10, 12],
    [12, 13, 12, 12],
    [13, 13, 13, 13]
]);