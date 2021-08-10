/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

// @lc code=start

//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let stack = [];
    stack.push(root);
    let level = 0;
    while (stack.length) {
        let length = stack.length;
        level++;
        while (length) {
            let curr = stack.shift();
            helper(curr, stack, level);
            length--;
        }
    }
};
function helper(curr, stack, level) {
    if (level % 2 === 0) {
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    } else {
        if (curr.left) {
            stack.push(curr.left);
        }
        if (curr.right) {
            stack.push(curr.right);
        }
    }
}

// @lc code=end

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
zigzagLevelOrder(root);


