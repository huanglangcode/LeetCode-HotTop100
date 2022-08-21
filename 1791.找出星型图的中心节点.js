/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let set = new Set()
    for (const [a, b] of edges) {
        if (set.has(a)) return a
        if (set.has(b)) return b
        set.add(a)
        set.add(b)
    }
};
// @lc code=end

/**
 * 输入：edges = [[1,2],[2,3],[4,2]]
输出：2
解释：如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。
 */

var edges = [[1, 2], [2, 3], [4, 2]]
let res = findCenter(edges)
console.log('res :>> ', res);