/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    const map = new Map()
    for (let i = 2; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    let ans = 0
    let dp = [...new Array(arr.length)].map(_ => new Array(arr.length).fill(2))
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let needed = arr[i] + arr[j]
            if (map.has(needed)) {
                let idx = map.get(needed)
                dp[j][idx] = dp[i][j] + 1
                ans = Math.max(ans, dp[j][idx])
            }
        }
    }
    return ans
};
// @lc code=end

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

lenLongestFibSubseq(arr)