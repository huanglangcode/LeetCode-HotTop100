/**
 * @param {number[]} nums
 * @return {boolean}
给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。
如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：
子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，但是子数组 [1,3,5] 不符合要求。
如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。

示例 1：
输入：nums = [4,4,4,5,6]
输出：true
解释：数组可以划分成子数组 [4,4] 和 [4,5,6] 。
这是一种有效划分，所以返回 true 。
示例 2：
输入：nums = [1,1,1,2]
输出：false
解释：该数组不存在有效划分。

提示：
2 <= nums.length <= 105
1 <= nums[i] <= 106
 */
var validPartition = function (nums) {
    let dp = new Array(nums.length).fill(false)
    dp[0] = false, dp[1] = nums[0] === nums[1]
    for (let i = 2; i < nums.length; i++) {
        if (i === 2) {
            dp[i] = (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2] && nums[i] - nums[i - 1] === 1)
                || nums[i] === nums[i - 1]
        } else {
            dp[i] = (nums[i] === nums[i - 1] && dp[i - 2])
                || (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2] && nums[i] - nums[i - 1] === 1 && dp[i - 3])
                || (nums[i] === nums[i - 1] && nums[i] === nums[i - 2] && dp[i - 3])
        }
    }
    return dp[nums.length - 1]
};


var nums = [35, 36, 37, 38, 39, 40, 41]

let res = validPartition(nums)
console.log('res', res)