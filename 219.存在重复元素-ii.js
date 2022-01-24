/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II

给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
示例 1：
输入：nums = [1,2,3,1], k = 3
输出：true

示例 2：
输入：nums = [1,0,1,1], k = 1
输出：true

示例 3：
输入：nums = [1,2,3,1,2,3], k = 2
输出：false

提示：
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (!map.has(val)) {
            map.set(val, i)
        } else {
            if (i - map.get(val) <= k) {
                return true
            }
            map.set(val, i)
        }
    }
    return false
};
// @lc code=end

var nums = [1, 2, 3, 1], k = 3
var a = containsNearbyDuplicate(nums, k)
console.log('a :>> ', a);