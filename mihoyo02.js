/**
给你两个 正 整数 startPos 和 endPos 。最初，你站在 无限 数轴上位置 startPos 处。在一步移动中，你可以向左或者向右移动一个位置。
给你一个正整数 k ，返回从 startPos 出发、恰好 移动 k 步并到达 endPos 的 不同 方法数目。由于答案可能会很大，返回对 109 + 7 取余 的结果。
如果所执行移动的顺序不完全相同，则认为两种方法不同。
注意：数轴包含负整数。

输入：startPos = 1, endPos = 2, k = 3
输出：3
解释：存在 3 种从 1 到 2 且恰好移动 3 步的方法：
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
可以证明不存在其他方法，所以返回 3 。

输入：startPos = 2, endPos = 5, k = 10
输出：0
解释：不存在从 2 到 5 且恰好移动 10 步的方法。
 
提示：
1 <= startPos, endPos, k <= 1000
 */

/* @param {number} startPos
* @param {number} endPos
* @param {number} k
* @return {number}
*/
const MOD = 1e9 + 7
var numberOfWays = function (startPos, endPos, k) {
    let memo = {}
    const helper = (currIdx, left) => {
        const key = `${currIdx}_${left}`
        if (memo[key] !== undefined) return memo[key]
        if (left === 0) {
            if (currIdx === endPos) {
                memo[key] = 1
                return 1
            }
            memo[key] = 0
            return 0
        } else {
            let res = 0
            if (left > 0) {
                res = (res + helper(currIdx - 1, left - 1) % MOD + helper(currIdx + 1, left - 1) % MOD) % MOD
            }
            memo[key] = res
            return res
        }
    }
    return helper(startPos, k)
};

// dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1]

var startPos = 1, endPos = 2, k = 3

let res = numberOfWays(startPos, endPos, k)
console.log('res', res)