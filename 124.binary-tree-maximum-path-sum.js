/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
路径和 是路径中各节点值的总和。
给你一个二叉树的根节点 root ，返回其 最大路径和 。
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    // let dp = [];
    // dp[0] = root.val;
    // let stack = [];
    // stack.push(root);
    // while (stack.length) {
    //     let length = stack.length;
    //     while (length) {
    //         let curr = stack.shift();
    //         console.log('curr.val :>> ', curr.val);
    //         if (curr.left) {
    //             stack.push(curr.left);
    //         }
    //         length--;
    //     }
    // }
    let max = Number.MIN_SAFE_INTEGER;
    const helper = (node) => {
        if (!node) {
            return 0;
        }
        let leftMax = helper(node.left);
        let rightMax = helper(node.right);
        console.log('node.val :>> ', node.val);
        max = Math.max(max, node.val + leftMax, node.val + rightMax, node.val + leftMax + rightMax, node.val);
        return Math.max(node.val, node.val + leftMax, node.val + rightMax);
    };
    helper(root);
    return max;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(5);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(10);
root.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(6);
root.left.right = new TreeNode(8);

maxPathSum(root);