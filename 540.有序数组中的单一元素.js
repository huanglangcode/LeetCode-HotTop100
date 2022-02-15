/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素

给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
请你找出并返回只出现一次的那个数。
你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

示例 1:
输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2.

示例 2:
输入: nums =  [3,3,7,7,10,11,11]
输出: 10

提示:
1 <= nums.length <= 105
0 <= nums[i] <= 105
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0, r = nums.length - 1
    while (l < r) {
        const mid = l + r >> 1
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                l = mid + 1
            } else {
                r = mid
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                l = mid + 1
            } else {
                r = mid
            }
        }
    }
    return nums[l]
};
// @lc code=end

var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]

let res = singleNonDuplicate(nums)
console.log('res :>> ', res);

/**
 * 根据题目描述，
 * 数组应该呈现为nums[0] == nums[1], nums[2] == nums[3]的形式，也就是nums[i] == nums[i^1]
 * 如果不相等，那么说明分割点在该点左边，导致了错位；如果相等，说明分割点在该点右边，还没有错位。
 * 也就是如果nums[mid] == nums[mid^1]，我们要left = mid + 1；否则我们要right = mid

 * [1]2 2   33
 * 11  [2]  33
 * 11   2 2[3]
 * 
 */