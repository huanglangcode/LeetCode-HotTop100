/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let res = 0;
    let flag = false;
    const helper = (node) => {
        if (!node) {
            return;
        }
        helper(node.left);
        if (node.val === low) {
            flag = true;
        }
        if (flag) {
            res += node.val;
        }
        if (node.val === high) {
            flag = false;
            return;
        }
        helper(node.right);
    };
    helper(root)
    console.log(res);
    return res;
};
// @lc code=end

