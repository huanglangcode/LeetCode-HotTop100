// 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。
// 矩阵中坐标 (a, b) 的 值 
// 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 
// matrix[i][j]（下标从 0 开始计数）执行异或运算得到。
// 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//[5,2]
//[1,6] 
//  k = 1
//  输出：7
//  解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。(0,1)-> 7  (0,0)-> 5  (1,0)-> 4  (1,1)->0
var kthLargestValue = function (matrix, k) {
    let dp = new Array(matrix.length).fill(0).map(ele => ele = new Array(matrix[0].length).fill(0));
    let monoStack = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] ^ matrix[i][j];
                monoStack.push(dp[i][j]);
            } else if (j === 0) {
                dp[i][j] = dp[i - 1] ? dp[i - 1][j] ^ matrix[i][j] : matrix[i][j];
                monoStack.push(dp[i][j]);
            } else {
                dp[i][j] = dp[i][j - 1] ^ dp[i - 1][j] ^ dp[i - 1][j - 1] ^ matrix[i][j];
                monoStack.push(dp[i][j]);
            }
        }
    }
    monoStack.sort((a, b) => a - b);
    return monoStack[k - 1];
};

kthLargestValue([[5, 2], [1, 6]], 1);