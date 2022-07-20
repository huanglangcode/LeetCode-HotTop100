/*
 * @lc app=leetcode.cn id=802 lang=javascript
 *
 * [802] 找到最终的安全状态
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let outDegree = new Array(graph.length).fill(0)
    let reGraph = [...new Array(graph.length)].map(ele => new Array())
    let queue = []
    for (let i = 0; i < graph.length; i++) {
        for (const ele of graph[i]) {
            reGraph[ele].push(i)
        }
        outDegree[i] = graph[i].length
        if (!graph[i].length) {
            queue.push(i)
        }
    }
    while (queue.length) {
        let curr = queue.pop()
        for (const ele of reGraph[curr]) {
            if (--outDegree[ele] === 0) queue.push(ele)
        }
    }
    let res = []
    for (let i = 0; i < outDegree.length; i++) {
        if (outDegree[i] === 0) res.push(i)
    }
    return res
};
// @lc code=end

var graph = [[1, 2], [5, 6], [5], [0, 1], [5], [], []]

graph = [[1, 2], [2, 3], [5], [0], [5], [], []]

eventualSafeNodes(graph)