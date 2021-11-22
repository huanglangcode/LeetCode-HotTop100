/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 * 
树可以看成是一个连通且 无环 的 无向 图。

给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。
添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。
图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

 输入: edges = [[1,2], [1,3], [2,3]]
输出: [2,3]

输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
输出: [1,4]

tips:
    n == edges.length
    3 <= n <= 1000
    edges[i].length == 2
    1 <= ai < bi <= edges.length
    ai != bi
    edges 中无重复元素
    给定的图是连通的 
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let set = new UnionSet(edges.length + 1)
    let res = []
    for (const [from, to] of edges) {
        if (!set.merge(from, to)) {
            res = [from, to]
        }
    }
    return res
};
// @lc code=end

class UnionSet {
    constructor(n) {
        this.members = new Array(n)
        for (let i = 0; i < n; i++) {
            this.members[i] = i
        }
    }
    find(x) {
        if (this.members[x] === x) {
            return x
        } else {
            let res = this.find(this.members[x])
            this.members[x] = res
            return res
        }
    }
    merge(x, y) {
        const yParent = this.find(y)
        const xParent = this.find(x)
        if (xParent === yParent) {
            return false
        }
        this.members[yParent] = xParent
        return true
    }
}

let res = findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])
console.log('res :>> ', res);