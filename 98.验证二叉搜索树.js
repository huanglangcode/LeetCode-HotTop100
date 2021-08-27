/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) { return true }
    let stack = []
    let node = root
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        let curr = stack.pop()
        node = curr.right
    }
    return true
};
// @lc code=end
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let root = new TreeNode(6)

root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)

root.right = new TreeNode(9)
root.right.left = new TreeNode(8)
root.right.right = new TreeNode(12)

isValidBST(root)
