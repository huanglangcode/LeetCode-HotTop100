/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start

/**
给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，
其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。
注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

输入：
equations = [["a","b"],["b","c"]], 
values = [2.0, 3.0], 
queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let graph = {}
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i], v = values[i]
        if (graph[a]) {
            graph[a].push({
                son: b,
                v
            })
        } else {
            graph[a] = [{
                son: b,
                v
            }]
        }
        if (graph[b]) {
            graph[b].push({
                son: a,
                v: 1 / v
            })
        } else {
            graph[b] = [{
                son: a,
                v: 1 / v
            }]
        }
    }
    const helper = (from, to, times, set) => {
        set.add(from)
        if (!graph[from]) {
            return -1
        }
        for (const obj of graph[from]) {
            if (obj.son === to) {
                return obj.v * times
            } else {
                if (!set.has(obj.son)) {
                    let res = helper(obj.son, to, obj.v * times, set)
                    if (res !== -1) {
                        return res
                    }
                }
            }
        }
        return -1
    }

    let res = []
    for (const [from, to] of queries) {
        res.push(helper(from, to, 1, new Set()))
    }
    return res
};
// @lc code=end

// var equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
// const 输出 = [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
let res = calcEquation(
    [["x1", "x2"], ["x2", "x3"], ["x3", "x4"], ["x4", "x5"]],
    [3.0, 4.0, 5.0, 6.0],
    [["x1", "x5"], ["x5", "x2"], ["x2", "x4"], ["x2", "x2"], ["x2", "x9"], ["x9", "x9"]]
);
console.log('res :>> ', res);
// [360,0.00833,20,1,-1,-1]
// [360,0.00833,-1,1,-1,-1]