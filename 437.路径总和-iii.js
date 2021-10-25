/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0
    const helper = (node, remain) => {
        if (!node) return 0
        let res = node.val === remain ? 1 : 0
        let left = helper(node.left, remain - node.val)
        let right = helper(node.right, remain - node.val)
        return res + left + right
    }
    let res1 = helper(root, targetSum)
    let res2 = pathSum(root.left, targetSum)
    let res3 = pathSum(root.right, targetSum)
    return res1 + res2 + res3
};
// @lc code=end

// root = [10,5,-3,3,2,null,11,3,-2,null,1]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(-3)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(1)

root.left.left.left = new TreeNode(3)
root.left.left.right = new TreeNode(-2)

root.right.right = new TreeNode(11)

let res = pathSum(root, 8)
console.log('res :>> ', res);