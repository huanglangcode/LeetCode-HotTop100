/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
累加数 是一个字符串，组成它的数字可以形成累加序列。
一个有效的 累加序列 必须 至少 包含 3 个数。
除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。
如果是，返回 true ；否则，返回 false 。
说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

示例 1：
输入："112358"
输出：true 
解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

示例 2：
输入："199100199"
输出：true 
解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199

提示：
1 <= num.length <= 35
num 仅由数字（0 - 9）组成

 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    const helper = (last, length, endIdx) => {

    }
    // 假定最后一个数 然后往前推 前两个数 一直到idx为0
    // 最后一个数的length为 1~ num.length/3
    for (let i = 1; i <= Math.floor(num.length / 3); i++) {
        helper(num.slice(num.length - i), i, num.length - i)
    }
};
// @lc code=end

// isAdditiveNumber("112358")
isAdditiveNumber("199100199")