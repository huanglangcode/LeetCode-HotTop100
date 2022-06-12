/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    const val = preorder[0]
    const root = new TreeNode(val)
    const idx = inorder.indexOf(val)
    const inorderLeft = inorder.slice(0, idx)
    const inorderRight = inorder.slice(idx + 1)
    let leftLength = inorderLeft.length
    const preorderLeft = preorder.slice(1, 1 + leftLength)
    const preorderRight = preorder.slice(1 + leftLength)
    root.left = buildTree(preorderLeft, inorderLeft)
    root.right = buildTree(preorderRight, inorderRight)
    return root
};
// @lc code=end

/**
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
 * 
 */
var preorder = [1, 2, 3],
    inorder = [2, 3, 1]

let res = buildTree(preorder, inorder)
console.log('res', res);