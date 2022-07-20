/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (!edges || n < 2) return [0];
    let graph = [];
    for (let [x, y] of edges) {
        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let leaves = [];
    graph.map((pts, i) => pts.length === 1 && leaves.push(i));
    while (n > 2) {
        n = n - leaves.length;
        let nxt_leaves = [];
        for (let leave of leaves) {
            tmp = graph[leave].pop();
            graph[tmp].splice(graph[tmp].indexOf(leave), 1);
            graph[tmp].length === 1 && nxt_leaves.push(tmp);
        }
        leaves = nxt_leaves;
    }
    return leaves;
};
// @lc code=end
var n = 6,
    edges = [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 4],
        [5, 4]
    ]
let res = findMinHeightTrees(n, edges)
console.log('res', res);