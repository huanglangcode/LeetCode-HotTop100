/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值。
 这条路径可以经过也可以不经过根节点。
 两个节点之间的路径长度 由它们之间的边数表示。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    let max = 0
    const helper = (node, parentVal) => {
        if (!node) return 0
        const left = helper(node.left, node.val)
        const right = helper(node.right, node.val)
        max = Math.max(left + right, max)
        return node.val === parentVal ? Math.max(left, right) + 1 : 0
    }
    helper(root, root.val)
    return max
};
// @lc code=end

const buildTree = (arr) => {
    const set = new Set()
    let root = new TreeNode(+arr[0])
    set.add(0)
    const queue = [root]
    let idx = 0
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (arr[idx * 2 + 1] !== null && Number.isInteger(+arr[idx * 2 + 1]) && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(+arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] !== null && Number.isInteger(+arr[idx * 2 + 2]) && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(+arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var root = [5, 5, 5, 1, 5, 5]

let res = longestUnivaluePath(buildTree(root))
console.log('res', res)