/**
给你一个由 正 整数组成的数组 nums 。
如果 nums 的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，则称该子数组为 优雅 子数组。
返回 最长 的优雅子数组的长度。
子数组 是数组中的一个 连续 部分。
注意：长度为 1 的子数组始终视作优雅子数组。

示例 1：
输入：nums = [1,3,8,48,10]
输出：3
解释：最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：
- 3 AND 8 = 0
- 3 AND 48 = 0
- 8 AND 48 = 0
可以证明不存在更长的优雅子数组，所以返回 3 。

示例 2：
输入：nums = [3,1,5,11,13]
输出：1
解释：最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。
 
提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let max = 1
    for (let i = 0; i < nums.length - 1; i++) {
        let arr = 0
        let curr = nums[i]
        for (let b = 0; b <= 31; b++) {
            if ((curr >> b) & 1 === 1) {
                arr |= (1 << b)
            }
        }
        let j = i + 1
        loop:
        while (j < nums.length) {
            const nxt = nums[j]
            for (let b = 0; b <= 31; b++) {
                if ((nxt >> b) & 1 === 1) {
                    if ((arr >> b) & 1 === 0) {
                        arr |= (1 << b)
                    } else {
                        max = Math.max(max, j - i)
                        break loop
                    }
                }
            }
            j++
        }
        if (j === nums.length) {
            max = Math.max(max, j - i)
        }
    }
    return max
};

var nums = [1, 3, 8, 48, 10]

console.time(1)
let res = longestNiceSubarray(nums)
console.timeEnd(1)
console.log('res', res)