/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */
// 输入：timeSeries = [1,4], duration = 2
// 输出：4
// 解释：提莫攻击对艾希的影响如下：
// - 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。
// - 第 4 秒，提莫再次攻击艾希，艾希中毒状态又持续 2 秒，即第 4 秒和第 5 秒。
// 艾希在第 1、2、4、5 秒处于中毒状态，所以总中毒秒数是 4 。
// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let total = 0
    let nextDuration = -1
    for (let i = 0; i < timeSeries.length; i++) {
        total += duration
        const begin = timeSeries[i]
        if (nextDuration >= begin) {
            total -= (nextDuration - begin + 1)
        }
        nextDuration = begin + duration - 1
    }
    return total
};
// @lc code=end

//  输入：timeSeries = [1, 4], duration = 2
var timeSeries = [0, 1, 2, 3, 4, 5], duration = 1

let res = findPoisonedDuration(timeSeries, duration)
console.log('res :>> ', res);