/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let res = 0
    for (const log of logs) {
        if (log === './') {
            continue
        } else if (log === '../') {
            res = res < 1 ? 0 : res - 1
        } else {
            res += 1
        }
    }
    return res < 0 ? 0 : res
};
// @lc code=end

var logs = logs = ["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]

let res = minOperations(logs)
console.log('res', res)