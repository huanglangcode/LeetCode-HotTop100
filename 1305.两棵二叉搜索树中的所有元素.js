/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const arr1 = [], arr2 = [], res = []
    const helper = (node, array) => {
        if (!node) return
        helper(node.left, array)
        array.push(node.val)
        helper(node.right, array)
    }
    helper(root1, arr1)
    helper(root2, arr2)
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }
    if (arr1.length) {
        res.concat(arr1)
    }
    if (arr2.length) {
        res.concat(arr2)
    }
    return res
};
// @lc code=end
/**
 * [2,1,4]
   [1,0,3]
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var root1 = new TreeNode(2)
root1.left = new TreeNode(1)
root1.right = new TreeNode(4)
var root2 = new TreeNode(1)
root2.left = new TreeNode(0)
root2.right = new TreeNode(3)
getAllElements(root1, root2)