/**
 * @param {number[]} N
 * @param {number} V
 * @return {number}
 */
var minRemainingSpace = function (N, V) {
    let min = Infinity
    let sum = N.reduce((sum, curr) => {
        min = Math.min(curr, min)
        sum += curr
        return sum
    }, 0)
    if (V > sum) return V - sum
    if (V < min) return V
    let dp = [...new Array(N.length)].map(_ => new Array(V + 1).fill(0))
    for (let i = 1; i <= V; i++) {
        if (i < N[0]) continue
        dp[0][i] = N[0]
    }
    for (let i = 1; i < N.length; i++) {
        for (let j = 1; j <= V; j++) {
            if (j < N[i]) {
                dp[i][j] = dp[i - 1][j]
            } else[
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - N[i]] + N[i])
            ]
        }
    }
    return V - dp[N.length - 1][V]
};


var N = [8, 1, 12, 7, 9, 7], V = 11


let res = minRemainingSpace(N, V)
console.log('res :>> ', res);