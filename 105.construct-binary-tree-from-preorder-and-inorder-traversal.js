/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

var helper = (Pre, pStart, pEnd, In, iStart, iEnd) => {
    if (pStart > pEnd || iStart > iEnd) {
        return null
    }
    let root = new TreeNode(Pre[pStart])
    let rootIndex = iStart
    while (In[rootIndex] !== Pre[pStart]) {
        rootIndex++
    }
    root.left = helper(Pre, pStart + 1, pStart + rootIndex - iStart, In, iStart, rootIndex - 1)
    root.right = helper(Pre, pStart + rootIndex - iStart + 1, pEnd, In, rootIndex + 1, iEnd)
    return root
}
// @lc code=end

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])