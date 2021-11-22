/*
 * @lc app=leetcode.cn id=1218 lang=javascript
 *
 * [1218] 最长定差子序列

给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。
子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

示例 1：
输入：arr = [1,2,3,4], difference = 1
输出：4
解释：最长的等差子序列是 [1,2,3,4]。

示例 2：
输入：arr = [1,3,5,7], difference = 1
输出：1
解释：最长的等差子序列是任意单个元素。

示例 3：
输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
输出：4
解释：最长的等差子序列是 [7,5,3,1]。

Let dp[i] be the maximum length of a subsequence of the given difference whose last element is i.
dp[i] = 1 + dp[i-k]
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    const n = arr.length
    let dp = Array(40001).fill(0)
    for (let i = 0; i < n; i++) {
        dp[arr[i] + 20000] = (!!dp[arr[i] - difference + 20000] ? dp[arr[i] - difference + 20000] : 0) + 1
    }
    return Math.max(...dp)
};
// @lc code=end

let res = longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)
console.log('res :>> ', res);

res = longestSubsequence([1, 2, 3, 4], 1)
console.log('res :>> ', res);

res = longestSubsequence([3, 4, -3, -2, -4], -5)
console.log('res :>> ', res);