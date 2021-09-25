/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
输出：[10,55,45,25,25]

换一种思路理解题意，将问题转换为：
某公交车共有 n 站，第 i 条记录 bookings[i] = [i, j, k] 表示在 i 站上车 k 人，乘坐到 j 站，在 j+1 站下车，需要按照车站顺序返回每一站车上的人数
根据 1 的思路，定义 counter[] 数组记录每站的人数变化，counter[i] 表示第 i+1 站。
遍历 bookings[]：bookings[i] = [i, j, k] 表示在 i 站增加 k 人即 counters[i-1] += k，在 j+1 站减少 k 人即 counters[j] -= k 遍历（整理）counter[] 数组，
得到每站总人数： 每站的人数为前一站人数加上当前人数变化 counters[i] += counters[i - 1]
 */
// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let res = Array(n).fill(0)
    for (const [start, end, value] of bookings) {
        res[start - 1] += value
        if (end < n) {
            res[end] -= value;
        }
        console.log('tempRes :>> ', res);
    }
    console.log('res :>> ', res);
    for (let i = 1; i < n; i++) {
        res[i] += res[i - 1];
    }
    console.log('res :>> ', res);
    return res
};
// @lc code=end
corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)