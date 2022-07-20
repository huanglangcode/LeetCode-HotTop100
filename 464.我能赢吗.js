/**
 * @param {number} maxn
 * @param {number} total
 * @return {boolean}
 */
var canIWin = function (maxn, total) {
    if (maxn >= total) return true
    let sum = (maxn * (maxn + 1)) / 2
    if (sum < total) return false
    // 最大不超过32位integer
    let mask = (1 << maxn) - 1
    const dp = new Array(1 << maxn).fill(null);
    const helper = (sum, currMask) => {
        if (dp[currMask] !== null) {
            return dp[currMask]
        }
        for (let i = 1; i <= maxn; i++) {
            // 检查当前数字是否被选中. 如果已经被选中则略过
            if (!(currMask >> (i - 1) & 1)) continue
            if (sum + i >= total) {
                dp[currMask] = true
                return true
            }
            // 交给下一位选手 如果他无法获胜 则我方有必胜的方案. 将第i位置零
            if (!helper(sum + i, currMask ^ (1 << (i - 1)))) {
                dp[currMask] = true
                return true
            }
        }
        dp[currMask] = false
        return false
    }
    return helper(0, mask)
};


var maxn = 20, total = 210

let r = canIWin(maxn, total)
console.log('r :>> ', r);
