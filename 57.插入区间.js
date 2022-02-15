/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * [57] 插入区间
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]
 

提示：

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals 根据 intervals[i][0] 按 升序 排列
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (!intervals.length) { return [newInterval] }
    let idx = 0, n = intervals.length, ans = []
    while (idx < n && intervals[idx][1] < newInterval[0]) {
        ans.push(intervals[idx])
        idx++
    }
    while (idx < n && intervals[idx][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[idx][0], newInterval[0])
        newInterval[1] = Math.max(intervals[idx][1], newInterval[1])
        idx++
    }
    ans.push(newInterval)
    while (idx < n) {
        ans.push(intervals[idx]);
        idx++;
    }
    return ans
};
// @lc code=end

var intervals = [[1, 2], [3, 4], [6, 7], [8, 10], [12, 16]], newInterval = [3, 10]
let res = insert(intervals, newInterval)
console.log('res :>> ', res);

/**
 *    XXXXX 
 * XXXXXXXXXX XXXXX 
 * 
 * 
 */