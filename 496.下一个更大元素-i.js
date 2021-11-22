/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start

/**
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
    对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
    对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let hash = {}
    for (let i = 0; i < nums2.length; i++) {
        const curr = nums2[i]
        let idx = i + 1
        while (idx < nums2.length) {
            if (nums2[idx] > curr) {
                hash[curr] = nums2[idx]
                break
            }
            idx++
        }
        if (!Number.isInteger(hash[curr])) {
            hash[curr] = -1
        }
    }
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        res.push(hash[nums1[i]])
    }
    return res
};
// @lc code=end

nextGreaterElement([4, 1, 2], [1, 3, 4, 2])