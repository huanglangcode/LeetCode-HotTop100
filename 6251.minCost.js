/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
    let m = costs.length, n = costs[0].length
    let dp = [...new Array(m)].map(_ => new Array(n).fill(Infinity))
    dp[0] = costs[0]
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                dp[i][j] = costs[i][j] + Math.min(dp[i - 1][1], dp[i - 1][2])
            } else if (j === 1) {
                dp[i][j] = costs[i][j] + Math.min(dp[i - 1][0], dp[i - 1][2])
            } else if (j === 2) {
                dp[i][j] = costs[i][j] + Math.min(dp[i - 1][0], dp[i - 1][1])
            }
        }
    }
    return Math.min(...dp[m - 1])
};


var costs = [[7, 6, 2]]

let res = minCost(costs)
console.log('res :>> ', res);