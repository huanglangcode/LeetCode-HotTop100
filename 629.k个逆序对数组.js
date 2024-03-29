/*
 * @lc app=leetcode.cn id=629 lang=javascript
 *
 * [629] K个逆序对数组
给出两个整数 n 和 k，找出所有包含从 1 到 n 的数字，且恰好拥有 k 个逆序对的不同的数组的个数。
逆序对的定义如下：对于数组的第i个和第 j个元素，如果满i < j且 a[i] > a[j]，则其为一个逆序对；否则不是。
由于答案可能很大，只需要返回 答案 mod 109 + 7 的值。

示例 1:
输入: n = 3, k = 0
输出: 1
解释: 
只有数组 [1,2,3] 包含了从1到3的整数并且正好拥有 0 个逆序对。

示例 2:
输入: n = 3, k = 1
输出: 2
解释: 
数组 [1,3,2] 和 [2,1,3] 都有 1 个逆序对。
 */
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const MOD = 1000000007;
var kInversePairs = function (n, k) {
    let dp = new Array(k + 1);
    dp.fill(0);
    dp[0] = 1;
    for (let i = 2; i <= n; i++) {
        const next_dp = new Array(k + 1);
        next_dp.fill(0);
        next_dp[0] = 1;
        for (let j = 1; j <= k; j++) {
            next_dp[j] = (next_dp[j - 1] + dp[j]) % MOD;
            if (j >= i) {
                next_dp[j] = (next_dp[j] - dp[j - i] + MOD) % MOD;
            }
        }
        dp = next_dp;
    }
    return dp[k];
};

// @lc code=end
var n = 1000, k = 1
let res = kInversePairs(n, k)
console.log('res :>> ', res);


/**
 * [1,2,3] 2
 * 1 2 3  |0|
 * 1 3 2  |1|
 * 
 * 2 1 3  |1|
 * 2 3 1  |2|
 * 
 * 3 1 2  |2|
 * 3 2 1  |3|
 * 
 * [1,2,3,4]  4
 * 
 * 1 2 3 4  |0|
 * 1 2 4 3  |1|
 * 1 3 2 4  |1|
 * 1 3 4 2  |2|
 * 1 4 2 3  |2|
 * 1 4 3 2  |3|
 * 
 * 2 1 3 4  |1|
 * 2 1 4 3  |2|
 * 2 3 1 4  |2|
 * 2 3 4 1  |3|
 * 2 4 1 3  |3|
 * 2 4 3 1  |4|
 * 
 * 3 1 2 4  |2|
 * 3 1 4 2  |3|
 * 3 2 1 4  |3|
 * 3 2 4 1  |4|
 * 3 4 1 2  |4|
 * 3 4 2 1  |5|  3 2 1
 * 
 * 4 1 2 3  |3|
 * 4 1 3 2  |4|
 * 4 2 1 3  |4|
 * 4 2 3 1  |5|  2 3 1
 * 4 3 1 2  |5|  3 1 2  k > n   求 4 4  f(3)(0)不可能 f(3)(1) + f(3)(2) + f(3)(3)  求 4 5  f(3)(0)不可能 f(3)(1)也不可能 + f(3)(2) + f(3)(3)
 * 4 3 2 1  |6|
 * 
// 0 1 2 3
// 1 2 2 1

//  0 1 2 3 4 5 6
//  1 3 5 6 5 3 1

//  0 1 2 3  4  5  6  7  8  9  10
//  1 4 9 15 20 22
// 如果要求f(4)(5) -> f(3)(3) + f(3)(2) + f(3)(1) + f(3)(0)
 1 -> 0  
 2 -> 1  
 3 -> 3
 4 -> 6
 5 -> 10
 6 -> 15
 7 -> 21
 f(n)(k) = f(n-1)(k) + f(n-1)(k-1) + f(n-1)(k-2) + f(n-1)(k-3) + ... + f(n-1)(0)
 如果是k >= n
 */