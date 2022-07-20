/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    if (bank.findIndex(ele => ele === end) === -1) return -1
    let queue = new Array(start), res = 0
    const diffCnt = (a, b) => {
        let cnt = 0
        for (let i = 0; i < 8; i++) {
            if (a[i] !== b[i]) cnt++
        }
        return cnt
    }
    let used = new Array(10).fill(1)
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (curr === end) return res
            for (let i = 0; i < bank.length; i++) {
                if (diffCnt(curr, bank[i]) === 1 && used[i]) {
                    used[i] = 0
                    queue.unshift(bank[i])
                }
            }
        }
        res++
    }
    return -1
};
// @lc code=end

var start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
//  ['A', 'C', 'G', 'T'] 

let res = minMutation(start, end, bank)
console.log('res :>> ', res); 