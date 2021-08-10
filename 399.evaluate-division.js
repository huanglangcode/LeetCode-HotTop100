/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const adjList = new Map();

    // Initialize the graph
    for (let i = 0; i < equations.length; i++) {
        adjList.set(equations[i][0], []);
        adjList.set(equations[i][1], []);
    }

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const u = equations[i][0];
        const v = equations[i][1];
        const weight = values[i];
        // u to v
        adjList.get(u).push([v, weight]);

        // v to u
        adjList.get(v).push([u, 1 / weight]);
    }
    console.log('adjList :>> ', adjList);

    for (let i = 0; i < queries.length; i++) {

    }
};
// @lc code=end
// import util from "util";

var equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
calcEquation(equations, values, queries);