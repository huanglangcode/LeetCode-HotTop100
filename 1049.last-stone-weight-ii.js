/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    // 从 stonesstones 数组中选择，凑成总和不超过sum/2的最大价值。
    let sum = stones.reduce((acc, curr) => {
        acc += curr;
        return acc;
    });
    let target = Math.floor(sum / 2);
    let dp = new Array(stones.length + 1).fill(0).map(ele => ele = new Array(target + 1).fill(0));
    for (let i = 1; i <= stones.length; i++) {
        let curr = stones[i - 1];
        for (let j = 1; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (curr === j) {
                dp[i][j] = curr;
            } else if (curr < j) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - curr] + curr);
            }
        }
    }
    return sum - 2 * dp[stones.length][target];

};
// @lc code=end

lastStoneWeightII([31, 26, 33, 21, 40]);
lastStoneWeightII([2, 7, 4, 1, 8, 1]);
lastStoneWeightII([1, 2]);