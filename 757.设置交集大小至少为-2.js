/*
 * @lc app=leetcode.cn id=757 lang=javascript
 *
 * [757] 设置交集大小至少为2
一个整数区间 [a, b]  ( a < b ) 代表着
从 a 到 b 的所有连续整数，包括 a 和 b。
给你一组整数区间intervals，请找到一个最小的集合 S，使得 S 里的元素与区间intervals中的每一个整数区间都至少有2个元素相交。
输出这个最小集合S的大小。
示例 1:
输入: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
输出: 3
解释:
考虑集合 S = {2, 3, 4}. S与intervals中的四个区间都有至少2个相交的元素。
且这是S最小的情况，故我们输出3。

示例 2:
输入: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
输出: 5
解释:
最小的集合S = {1, 2, 3, 4, 5}.

int 的长度范围为[1, 3000]。
int[i] 长度为 2，分别代表左、右边界。
int[i][j] 的值是 [0, 10^8]范围内的整数。
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })
    let res = 2, [l1, r1] = intervals[0], flag = false
    for (let i = 1; i < intervals.length; i++) {
        const [l2, r2] = intervals[i]
        if (l2 < r1) { // 可重叠.此时不需要添加新的节点. 
            l1 = l2
            r1 = Math.min(r1, r2)
            if (flag) {
                res++
                flag = false
            }
        } else if (l2 === r1) { // 仅有最左边缘重叠. 需要+1
            res++
            l1 = l2
            r1 = r2
            flag = true
        } else if (l2 > r1) { // 直接+2
            res += 2
            l1 = l2
            r1 = r2
        }
    }
    return res
};
// @lc code=end

var nums = [[2, 10], [3, 7], [3, 15], [4, 11], [6, 12], [6, 16], [7, 8], [7, 11], [7, 15], [11, 12]]

let res = intersectionSizeTwo(nums)
console.log('res :>> ', res);
/**
 * 
 *    34567            
 *        78
 *   234567890           
 *        78901
 *     45678901
 *            12   
 *       6789012
 *        789012345
 *    3456789012345      
 *       67890123456
 *  1234567890123456
 * 
 */