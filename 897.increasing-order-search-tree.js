/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let node = new TreeNode(-1);
    let p = node;
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.left);
        p.right = new TreeNode(root.val);
        p = p.right;
        helper(root.right);
    };
    helper(root);
    return node.right;
};


// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
increasingBST(root);