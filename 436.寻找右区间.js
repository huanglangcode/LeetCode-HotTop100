/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    let sortedArr = intervals.map(ele => ele[0]).sort((a, b) => a - b)
    let hash = {}
    for (let i = 0; i < intervals.length; i++) {
        hash[intervals[i][0]] = i
    }
    let n = intervals.length, res = new Array(n)
    for (let i = 0; i < intervals.length; i++) {
        const [, end] = intervals[i]
        if (end > sortedArr[n - 1]) {
            res[i] = -1
        } else {
            const val = helper(end, sortedArr)
            res[i] = hash[val]
        }
    }
    return res
};

function helper(target, arr) {
    let l = 0, r = arr.length - 1
    while (l <= r) {
        const mid = r - ((r - l) >> 1)
        let val = arr[mid]
        if (val >= target) {
            r = mid - 1
        } else if (val < target) {
            l = mid + 1
        }
    }
    return arr[l]
}
// @lc code=end

var intervals = [[1, 4], [2, 3], [3, 4]]

let res = findRightInterval(intervals)
console.log('res :>> ', res);
