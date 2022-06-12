/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    let left = 1, right = m * n
    while (left <= right) {
        const mid = right - ((right - left) >> 1)
        const cnt = counter(m, n, mid) // 小于等于mid的个数
        if (cnt < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};

function counter(m, n, val) {
    let cnt = 0
    for (let i = 1; i <= Math.min(m, val); i++) {
        cnt += Math.min(Math.floor(val / i), n)
    }
    return cnt
}
// @lc code=end

// 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。
/**
思路分析： ？

首先观察乘法表我们会发现，由于构造关系，决定了他每一行都是递增的。

如果我们需要在第i行中寻找大于num的个数，我们只要min(num / i, n)，
其中（i是这一行的行号，n是矩阵的列数）num / i代表的是如果num也在第i行，
它存在的列数，所以只要取最小值就是第i行不大于num的个数。
（比如例题1中，我们需要知道第2行，不大于4的个数，min(4 / 2, 3) == 2个（就是2， 4））

那么如果我们需要确定这个乘法表中不大于num的个数就非常简单了，我们只要将每一行
不大于num的个数累加即可。（比如例题1中，我们需要知道乘法表中不大于4的个数，
第一行3个、第二行2个，第三行1个）

现在我们就可以使用二分搜索了，初始化left = 1， right = n * m + 1，
mid = （left + right） / 2，在m，n的乘法表中寻找不超过mid的个数。
 * 1 2 3
 * 2 4 6
 * 3 6 9
 * 
 * 1 2 2 3 3 4 6 6 9 
 * 
 * 
 * 
 */
var m = 3, n = 3, k = 5
let res = findKthNumber(m, n, k)
console.log('res :>> ', res);