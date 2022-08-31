/*
 * @lc app=leetcode.cn id=1224 lang=javascript
 *
 * [1224] 最大相等频率
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
    const numFreq = new Array(100001).fill(0), freqCnt = new Array(100001).fill(0)
    let max = 0, res = 0
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i], len = i + 1
        let cnt = ++numFreq[curr]
        // 统计出现次数为cnt次的有多少个
        freqCnt[cnt]++
        freqCnt[cnt - 1]--
        max = Math.max(max, cnt)
        // 对应[1,2,3,4,5]
        if (max === 1) res = len
        // 对应 [3,3,3,2,2,2,1]
        if (max * freqCnt[max] + 1 === len) res = len
        // 对应 [2,2,3,3,4,4,5,5,5]
        if ((max - 1) * (freqCnt[max - 1] + 1) + 1 === len) res = len
    }
    return res
};
// @lc code=end

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

let res = maxEqualFreq(nums)
console.log('res', res)
