/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
    let stack = [];
    stack.push(root);
    let min = root.val;
    let secondMin = Number.MAX_VALUE;
    while (stack.length) {
        let length = stack.length;
        while (length--) {
            let curr = stack.shift();
            if (curr.val > min) {
                secondMin = Math.min(secondMin, curr.val);
            }
            if (curr.left) {
                stack.push(curr.left);
                stack.push(curr.right);
            }
        }
    }
    return Number.MAX_VALUE === secondMin ? -1 : secondMin;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// [2,2,5,null,null,5,5]
// [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]

let root = new TreeNode(2);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(5);
findSecondMinimumValue(root);