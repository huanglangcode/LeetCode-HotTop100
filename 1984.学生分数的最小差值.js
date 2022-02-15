/**
给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。
另给你一个整数 k ,从数组中选出任意 k 名学生的分数.
使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。
返回可能的 最小差值 。

示例 1：
输入：nums = [90], k = 1
输出：0
解释：选出 1 名学生的分数，仅有 1 种方法：
- [90] 最高分和最低分之间的差值是 90 - 90 = 0
可能的最小差值是 0

示例 2：
输入：nums = [9,4,1,7], k = 2
输出：2

解释：选出 2 名学生的分数，有 6 种方法：
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 4 = 5
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 1 = 8
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 7 = 2
- [9,4,1,7] 最高分和最低分之间的差值是 4 - 1 = 3
- [9,4,1,7] 最高分和最低分之间的差值是 7 - 4 = 3
- [9,4,1,7] 最高分和最低分之间的差值是 7 - 1 = 6
可能的最小差值是 2

提示：
1 <= k <= nums.length <= 1000
0 <= nums[i] <= 105
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let ans = 1e6
    for (let i = 0; i < nums.length - k + 1; i++) {
        const j = i + k - 1
        ans = Math.min(ans, nums[j] - nums[i])
    }
    return ans
};

var nums = [9, 4, 1, 7], k = 2
let ans = minimumDifference(nums, k)
console.log('ans :>> ', ans);