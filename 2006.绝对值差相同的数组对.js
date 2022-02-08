/**
 
给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，
满足 i < j 且 Math.abs|nums[i] - nums[j]| == k 。
 
示例 1：
输入：nums = [1,2,2,1], k = 1
输出：4
解释：差的绝对值为 1 的数对为：
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

示例 2：
输入：nums = [1,3], k = 3
输出：0
解释：没有任何数对差的绝对值为 3 。

示例 3：
输入：nums = [3,2,1,5,4], k = 2
输出：3

解释：差的绝对值为 2 的数对为：
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]

提示：
1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let cnt = 0
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            cnt += hash[nums[i]]
        }
        let need1 = nums[i] + k
        let need2 = nums[i] - k
        hash[need1] = hash[need1] + 1 || 1
        hash[need2] = hash[need2] + 1 || 1
    }
    return cnt
};

var nums = [3, 2, 1, 5, 4], k = 2
nums = [1, 3], k = 3
let cnt = countKDifference(nums, k)
console.log('cnt :>> ', cnt);