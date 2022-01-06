/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

示例 1:

输入: [3,6,9,1,18]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
示例 2:

输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
说明:

你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    radixSort(nums)
    let ret = 0;
    for (let i = 1; i < nums.length; i++) {
        ret = Math.max(ret, nums[i] - nums[i - 1]);
    }
    return ret;
};

var radixSort = (nums) => {
    let radix = 1
    let maxRadix = Math.max(...nums)
    let temp = [...Array(10)].map(_ => new Array())
    while (radix <= maxRadix) {
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            let z = ~~(curr / radix) % 10
            temp[z].push(curr)
        }
        let cnt = 0
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                nums[cnt] = temp[i][j]
                cnt++
            }
            temp[i] = []
        }
        radix *= 10
    }
}
// @lc code=end

var nums = [73, 22, 93, 9, 43, 55, 14, 28, 65, 39, 81, 107]
let res = maximumGap(nums)
console.log('res :>> ', res);

// 73, 22, 93, 9, 43, 55, 14, 28, 65, 39, 81, 107

// 0
// 1 81
// 2 22
// 3 73 93 43
// 4 14
// 5 55 65
// 6
// 7 107
// 8 28
// 9 9 39

// -> 81 22 73 93 41 14 55 65 107 28 9 39

// 0 107 09
// 1 14
// 2 22 28
// 3 39
// 4 43
// 5 55
// 6 65
// 7 73
// 8 81
// 9 93

// -> 107 09 14 22 28 39 43 55 65 73 81 93

// 0 009 014 022 028 039 043 055 065 073 081 093
// 1 107
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// -> 9 14 22 28 39 43 55 65 73 81 93 107