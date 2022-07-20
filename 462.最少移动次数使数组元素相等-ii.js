/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    if (nums.length === 1) return 0
    nums.sort((a, b) => a - b)
    let i = 0, j = nums.length - 1, res = 0
    while (j >= i) {
        res += nums[j] - nums[i]
        i++
        j--
    }
    return res
};

// @lc code=end


var nums = [-34, -19, -10, 4, 8, 10, 49, 17]


let res = minMoves2(nums)
console.log('res :>> ', res);