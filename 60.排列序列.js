/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

示例 1：
输入：n = 3, k = 3
输出："213"

示例 2：
输入：n = 4, k = 9
输出："2314"

示例 3：
输入：n = 3, k = 1
输出："123"

提示：
1 <= n <= 9
1 <= k <= n!
 */

// @lc code=start
/**
 * 123
 * 132
 * 213
 * 231
 * 312
 * 321
 * 如果k为6  (6 / (3-1)!)
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
const getPermutation = (n, k) => {
    let nums = Array.from({ length: n }, (v, i) => i + 1);
    let res = "";
    for (let i = n; i > 0; i--) {
        index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
        res += nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i - 1] * (index - 1));
    }
    return res;
};
// @lc code=end

let res = getPermutation(4, 9)
console.log('res :>> ', res);
// 265183794