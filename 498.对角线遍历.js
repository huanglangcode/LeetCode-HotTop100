/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 * const m = mat.length, n = mat[0].length, ans = new Array()
        for(let k = 0; k < m + n - 1; k++) {
            if ((k & 1) == 1) {
                for(let x = Math.max(0, k - n + 1); x < Math.min(k + 1, m); x++) {
                    ans.push(mat[x][k - x])
                }
            } else {
                for (let x = Math.min(k, m - 1); x >= Math.max(0, k - n + 1); x--) {
                    ans.push(mat[x][k - x])
                }
            }
        }
        return ans
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let m = mat.length, n = mat[0].length
    let res = new Array()
    for (let i = 0; i < m + n - 1; i++) {
        if ((i & 1) === 0) { // 正向
            for (let p = Math.min(i, m - 1); p < Math.max(0, i - n + 1) + 1; p++) {
                res.push(mat[p][i - p])
            }
        } else { // 反向
            for (let p = Math.max(0, i - n + 1) + 1; p >= Math.min(i, m - 1); p--) {
                res.push(mat[p][i - p])
            }
        }
    }
    return res
};
// @lc code=end

// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,4,7,5,3,6,8,9]


/**   
 *  1 2 3  
 *  4 5 6
 *  7 8 9
 *
 *   1      0    (0,0)
 *  4 2     1    (1,0)
 * 7 5 3    2 -> (0,2)
 *  8 6     3 -> (2,1)
 *   9      4 -> (2,2)
 * 
 *           
 *   1 2 3 4
 *   5 6 7 8
 *   9 a b c
 *   d e f g
 *   
 *      1
 *     5 2
 *    9 6 3
 *   d a 7 4 
 *    e b 8     4 
 *     f c
 *      g 
 *  
 *  左    0.0   
 *  右    0,1 -> 1,0    
 *  左    2,0 -> 1,1 -> 0,2 
 *  右    0,3 -> 1,2 -> 2,1 -> 3,0  
 *  左    3,1 -> 2,2 -> 1,3 
 *  右    2,3 -> 3,2
 *  左    3,3       
 *   
 *  1 2 3
 *  4 5 6
 * 
 * 
 */

var mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let res = findDiagonalOrder(mat)
console.log('res :>> ', res);