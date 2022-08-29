/*
 * @lc app=leetcode.cn id=1224 lang=javascript
 *
 * [1224] 最大相等频率
给你一个正整数数组 nums，请你从该数组中找出能满足下面要求的 最长 前缀，并返回该前缀的长度：
从前缀中 恰好删除一个 元素后，剩下每个数字的出现次数都相同。
如果删除这个元素后没有剩余元素存在，仍可认为每个数字都具有相同的出现次数（也就是 0 次）。

输入：nums = [2,2,1,1,5,3,3,5]
输出：7
解释：对于长度为 7 的子数组 [2,2,1,1,5,3,3]，如果我们从中删去 nums[4] = 5，就可以得到 [2,2,1,1,3,3]，里面每个数字都出现了两次。
 
输入：nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
输出：13

提示：
2 <= nums.length <= 105
1 <= nums[i] <= 105
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
    // 1.统计每个数字出现的频率. 2.统计出现频率为x次的个数
    let max = 0, numFreq = new Array(1e5 + 1).fill(0), freqCnt = new Array(1e5 + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        let cnt = ++numFreq[curr]
        freqCnt[cnt]++
        freqCnt[cnt - 1]--
        max = Math.max(cnt, max)
    }
};
// @lc code=end

var nums = [10, 2, 8, 9, 3, 8, 1, 5, 2, 3, 7, 6]

// nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]

maxEqualFreq(nums)