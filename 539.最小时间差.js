/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
示例 1：
输入：timePoints = ["23:59","00:00"]
输出：1

示例 2：
输入：timePoints = ["00:00","23:59","00:00"]
输出：0

提示：
2 <= timePoints.length <= 2 * 104
timePoints[i] 格式为 "HH:MM"
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let res = 720
    timePoints.sort((a, b) => {
        if (+a.split(':')[0] !== +b.split(':')[0]) {
            return +a.split(':')[0] - +b.split(':')[0]
        } else {
            return +a.split(':')[1] - +b.split(':')[1]
        }
    })
    let t = 0
    while (+timePoints[t].split(':')[0] < 24) {
        let n = timePoints[t].split(':')
        n[0] = +n[0] + 24
        timePoints.push(n.join(':'))
        t++
    }
    let minHourDiff = 12
    let i = 0, j = 1
    while (j < timePoints.length) {
        let time1 = timePoints[i]
        let time2 = timePoints[j]
        minHourDiff = time2.split(':')[0] - time1.split(':')[0]
        if (+time2.split(":")[1] >= +time1.split(":")[1]) {
            res = Math.min(res, 60 * minHourDiff + +time2.split(":")[1] - +time1.split(":")[1])
        } else {
            res = Math.min(res, 60 * (minHourDiff - 1) + 60 - +time1.split(":")[1] + +time2.split(":")[1])
        }
        i++
        j++
    }
    return res
};
// @lc code=end

var timePoints = ["19:59", "01:27", "09:50", "10:38", "14:55", "03:19", "03:54", "06:08", "05:44", "15:01"]
let res = findMinDifference(timePoints)
console.log('res :>> ', res);