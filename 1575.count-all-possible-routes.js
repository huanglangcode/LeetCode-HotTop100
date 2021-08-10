/*
 * @lc app=leetcode id=1575 lang=javascript
 * [1575] Count All Possible Routes
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
/**
 * dp[i][j] 代表 从i位置出发. 剩余j单位燃油时. 抵达f位置的可行方案数
 * 自顶向下
 * //到达f之前. 
 * 假设在k位置. 那么从k位置到f位置 需要needK = Math.abs(locations[k] - locations[f]) 单位燃油.
 * 假设在l位置. 那么从l位置到f位置 需要needl = Math.abs(locations[l] - locations[f]) 单位燃油.
 * 假设在m位置. 那么从m位置到f位置 需要needm = Math.abs(locations[m] - locations[f]) 单位燃油.
 * 假设在n位置. 那么从n位置到f位置 需要needn = Math.abs(locations[n] - locations[f]) 单位燃油.
 *                                   .......
 * dp[i][j] = dp[k][j - needK] + dp[l][j - needL] + dp[m][j - needM] + dp[n][j - needN] + ......
 * 
 * 
 * 自底向上
 * where dp[i][k] will be the number of ways to get from the start to i, with k available fuel.
 *  dp[i][k]= SUM (dp[ j ][ k - cost_to_get_from_i_to_j), for every j!=i
 *  That basically means that I consider visiting any inbetween location j so my path becomes start=>j=>i
 */
var countRoutes = function (locations, start, finish, fuel) {
    let n = locations.length;
    let mod = 1e9 + 7;
    let dp = [...new Array(n)].map(_ => new Array(fuel + 1).fill(0));
    dp[start][0] = 1; // 从 start位置 到 start 0 油耗 就 1条路
    for (let f = 1; f <= fuel; f++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j && f >= Math.abs(locations[i] - locations[j])) {
                    dp[i][f] = (dp[i][f] + dp[j][f - Math.abs(locations[j] - locations[i])]) % mod;
                }
            }
        }
    }
    let res = 0;
    for (let i = 0; i <= fuel; i++) {
        res = (res + dp[finish][i]) % mod;
    }
    return res;
};
// @lc code=end
// countRoutes([2, 1, 5], 0, 0, 3);
// countRoutes([2, 3, 6, 8, 4], 1, 3, 5);
// countRoutes([4, 3, 1], 1, 0, 6);
countRoutes([1, 2, 3], 0, 2, 40);
