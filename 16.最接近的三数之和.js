/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 示例：
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = Number.MAX_SAFE_INTEGER
    let idx = 1
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; right = nums.length - 1;
        while (left < right) {
            let localSum = nums[i] + nums[left] + nums[right];
            if (localSum === target) {
                return target
            } else if (localSum > target) {
                right--
                if (localSum - target < res) {
                    res = localSum - target
                    idx = 1
                }
            } else if (localSum < target) {
                left++
                if (target - localSum < res) {
                    res = target - localSum
                    idx = 2
                }
            }
        }
    }
    return idx == 1 ? target + res : target - res;
};
// @lc code=end

let res = threeSumClosest([-1, 2, 1, -4], 1)
console.log('res :>> ', res);