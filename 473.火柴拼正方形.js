/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    if (matchsticks.length < 4) return false
    const sum = matchsticks.reduce((acc, curr) => acc += curr)
    if (sum % 4 !== 0) return false
    const SIDE = sum / 4
    matchsticks.sort((a, b) => b - a)
    if (matchsticks[0] > SIDE) return false
    let usedMask = (1 << (matchsticks.length)) - 1
    const dp = new Array(1 << matchsticks.length).fill(null);
    const helper = (sideCnt, val) => {
        if (dp[usedMask] !== null) {
            return dp[usedMask]
        }
        if (sideCnt === 3) {
            return true
        }
        for (let i = 0; i < matchsticks.length; i++) {
            if ((usedMask >> (matchsticks.length - i - 1) & 1)) {
                if (matchsticks[i] + val < SIDE) {
                    usedMask = usedMask ^ (1 << (matchsticks.length - i - 1))
                    if (helper(sideCnt, matchsticks[i] + val)) {
                        return (dp[usedMask] = true)
                    }
                    usedMask = usedMask | (1 << (matchsticks.length - i - 1))
                } else if (matchsticks[i] + val === SIDE) {
                    usedMask = usedMask ^ (1 << (matchsticks.length - i - 1))
                    if (helper(sideCnt + 1, 0)) {
                        return (dp[usedMask] = true)
                    }
                    usedMask = usedMask | (1 << (matchsticks.length - i - 1))
                }
            }
        }
        return (dp[usedMask] = false)
    };
    return helper(0, 0)
}

var matchsticks = [5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4]

// matchsticks = [13, 11, 1, 8, 6, 7, 8, 8, 6, 7, 8, 9, 8]

let res = makesquare(matchsticks)
console.log('res :>> ', res);