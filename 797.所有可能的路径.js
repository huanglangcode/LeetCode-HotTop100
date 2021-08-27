/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

//  输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
//  输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
var allPathsSourceTarget = function (graph) {
    let ans = []
    const helper = (idx, path) => {
        if (path[path.length - 1] === graph.length - 1) {
            ans.push(path)
            return
        }
        for (let i = 0; i < graph[idx].length; i++) {
            helper(graph[idx][i], path.concat(graph[idx][i]))
        }
    }
    helper(0, [0])
    return ans
};
// @lc code=end

// 0 4
// 0 3 4
// 0 1 3 4
// 0 1 2 3 4
// 0 1 4 