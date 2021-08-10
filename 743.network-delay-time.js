/*
 * @lc app=leetcode id=743 lang=javascript
 *
 * [743] Network Delay Time
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let ans = new Array(n + 1).fill(Infinity);
    ans[k] = 0;
    ans[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (const [u, v, time] of times) {
            if (ans[u] + time < ans[v]) {
                ans[v] = ans[u] + time;
            }
        }
    }
    let p = Math.max(...ans);
    return p === Infinity ? -1 : p;

};
// @lc code=end

/*
 Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 Output: 2
 */

networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1);
networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2);
networkDelayTime([[1, 2, 1]], 2, 1);
networkDelayTime([[1, 2, 1]], 2, 2);
networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]]
    , 3
    , 2);