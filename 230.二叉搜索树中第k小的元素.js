/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} k
 * @return {number}
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 */
var kthSmallest = function (root, k) {
    let res = -1
    const helper = (node) => {
        if (!node) {
            return res
        }
        helper(node.left)
        if (!--k) {
            res = node.val;
            return
        }
        helper(node.right)
    }
    helper(root)
    return res
};
// @lc code=end

