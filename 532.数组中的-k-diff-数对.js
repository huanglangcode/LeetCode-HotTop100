/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 给定一个整数数组和一个整数 k，你需要在数组里找到 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。
这里将 k-diff 数对定义为一个整数对 (nums[i], nums[j])，并满足下述全部条件：
0 <= i < j < nums.length
|nums[i] - nums[j]| == k
注意，|val| 表示 val 的绝对值。

示例 1：
输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
示例 2：
输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
示例 3：
输入：nums = [1, 3, 1, 5, 4], k = 0
输出：1
解释：数组中只有一个 0-diff 数对，(1, 1)。

提示：
1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let res = new Set(), numSet = new Set()
    // |a - b| == k ==> a -b == k || b -a == k  ==>  a = b + k || a = b - k
    // 如当k=1  [9,8,9,7,8]时. 为了保证res不重复. 始终保存(a,b), (b,a)中的 a.
    for (const num of nums) {
        if (numSet.has(num + k)) {
            res.add(num + k)
        }
        if (numSet.has(num - k)) {
            res.add(num)
        }
        numSet.add(num)
    }
    return res
};
// @lc code=end

var nums = [2, 9, 0, 8, 9, 6, 5, 9, 8, 1, 9, 6, 9, 2, 8, 8, 7, 5, 7, 8, 8, 3, 7, 4, 1, 1, 6, 2, 9, 9, 3, 9, 2, 4, 6, 5, 6, 5, 1, 5, 9, 9, 8, 1, 4, 3, 2, 8, 5, 3, 5, 4, 5, 7, 0, 0, 7, 6, 4, 7, 2, 4, 9, 3, 6, 6, 5, 0, 0, 0, 8, 9, 9, 6, 5, 4, 6, 2, 1, 3, 2, 5, 0, 1, 4, 2, 6, 9, 5, 4, 9, 6, 0, 8, 3, 8, 0, 0, 2, 1], k = 1

findPairs(nums, k)