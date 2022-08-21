/**
给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。
返回 nums 中 所有 子数组范围的 和 。
子数组是数组中一个连续 非空 的元素序列。

示例 1：
输入：nums = [1,2,3]
输出：4
解释：nums 的 6 个子数组如下所示：
[1]，范围 = 最大 - 最小 = 1 - 1 = 0 
[2]，范围 = 2 - 2 = 0
[3]，范围 = 3 - 3 = 0
[1,2]，范围 = 2 - 1 = 1
[2,3]，范围 = 3 - 2 = 1
[1,2,3]，范围 = 3 - 1 = 2
所有范围的和是 0 + 0 + 0 + 1 + 1 + 2 = 4

示例 2：
输入：nums = [1,3,3]
输出：4
解释：nums 的 6 个子数组如下所示：
[1]，范围 = 最大 - 最小 = 1 - 1 = 0
[3]，范围 = 3 - 3 = 0
[3]，范围 = 3 - 3 = 0
[1,3]，范围 = 3 - 1 = 2
[3,3]，范围 = 3 - 3 = 0
[1,3,3]，范围 = 3 - 1 = 2
所有范围的和是 0 + 0 + 0 + 2 + 0 + 2 = 4

示例 3：
输入：nums = [4,-2,-3,4,1]
输出：59
解释：nums 中所有子数组范围的和是 59

1 <= nums.length <= 1000
-109 <= nums[i] <= 109
 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    const n = nums.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let minVal = nums[i], maxVal = nums[i];
        for (let j = i + 1; j < n; j++) {
            minVal = Math.min(minVal, nums[j]);
            maxVal = Math.max(maxVal, nums[j]);
            res += maxVal - minVal;
        }
    }
    return res;
};

let r = subArrayRanges([4, -2, -3, 4, 1])
console.log('r :>> ', r);

/**
 * 4 -2 -3 4 1 
 * 
 * 4 -2
 *   -2 -3
 *      -3 4
 *         4 1
 * 
 * 4 -2 -3 
 *   -2 -3 4
 *      -3 4 1
 * 
 * 4 -2 -3 4
 *   -2 -3 4 1
 * 
 * 4 -2 -3 4 1
 * 
 */