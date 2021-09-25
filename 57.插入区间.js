/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * [57] 插入区间
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
输入：
    intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], 
    newInterval = [4,8]
输出：
    [[1,2],[3,10],[12,16]]
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
};
// @lc code=end

insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
// [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
insert([[1, 3], [6, 9]], [2, 5])
// [[1,5],[6,9]]
insert([], [5, 7])
// [[5,7]]
insert([[1, 5]], [2, 3])
// [[1,5]]
insert([[1, 5]], [2, 7])
// [[1,7]]