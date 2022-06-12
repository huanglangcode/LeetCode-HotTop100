/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * 
    输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
    输出：[[2,4],[1,3],[2,4],[1,3]]
    解释：
    图中有 4 个节点。
    节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
    节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
    节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
    节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
 *   
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    let map = new Map()
    const helper = (curr) => {
        if (!curr) return curr
        if (!map.has(curr.val)) {
            map.set(curr.val, new Node(curr.val))
            map.get(curr.val).neighbors = curr.neighbors.map(ele => {
                return helper(ele)
            });
        }
        return map.get(curr.val)
    }
    return helper(node)
};
// @lc code=end

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

var adjList = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3]
]
let node = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
node.neighbors = [node2, node4]
node2.neighbors = [node, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node, node3]
let res = cloneGraph(node)
console.log('res', res);