/*
 * @lc app=leetcode.cn id=761 lang=javascript
 *
 * [761] 特殊的二进制序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function makeLargestSpecial(s) {
    const candidates = new Array()
    for (let i = 0, cur = 0, last = 0; i < s.length; i++) {
        cur += s.charCodeAt(i) === '1'.charCodeAt(0) ? 1 : -1
        if (cur == 0) {
            candidates.push("1" + makeLargestSpecial(s.substring(last + 1, i)) + "0")
            last = i + 1
        }
    }
    candidates.sort((a, b) => b.localeCompare(a))
    return candidates.join("")
};

// @lc code=end

var s = '110011100110110000'

let res = makeLargestSpecial(s)
console.log('res', res)