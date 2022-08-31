/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let stack = [], res = new Array(n).fill(0)
    for (const log of logs) {
        const [idx, state, timeStamp] = log.split(":")
        if (state === 'start') {
            stack.push([idx, timeStamp])
        } else {
            let [, timeStamp2] = stack.pop()
            let used = +timeStamp - +timeStamp2 + 1
            res[idx] += used
            // 上一级调用栈减去已经耗费的时间
            if (stack.length) {
                let [upperIdx,] = stack[stack.length - 1]
                res[upperIdx] -= used
            }
        }
    }
    return res
};
// @lc code=end

var n = 8, logs = [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114"
]

let res = exclusiveTime(n, logs)
console.log('res ', res, 'equals:', [20, 14, 35, 7, 6, 9, 10, 14])