/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

};
// @lc code=end
// 输入：root = [1,2,3,4,null,2,4,null,null,4]
// 输出：[[2,4],[4]]

// 输入：root = [2,1,1]
// 输出：[[1]]

// 输入：root = [2,2,2,3,null,3,null]
// 输出：[[2,3],[3]]
var root = [2, 2, 2, 3, null, 3, null]
let res = findDuplicateSubtrees(root)
console.log('res', res)