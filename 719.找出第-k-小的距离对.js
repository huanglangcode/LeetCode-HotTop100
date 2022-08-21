/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    let temp = new Array(1e6 + 1).fill(0)
    let min = Infinity, max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const val = Math.abs(nums[i] - nums[j])
            min = Math.min(val, min)
            max = Math.max(val, max)
            temp[val]++
        }
    }
    //  差为0的有1个 为1的3个 2的有5个 求第3小的
    //  [1,3,5,10]
    let cnt = 0
    for (let i = min; i <= max; i++) {
        while (temp[i] !== 0) {
            temp[i]--
            cnt++
            if (cnt === k) return i
        }
    }
    return 0
};
// @lc code=end

var nums = [1, 6, 1], k = 3

smallestDistancePair(nums, k)