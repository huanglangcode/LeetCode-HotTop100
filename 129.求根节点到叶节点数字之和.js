/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
 */

// @lc code=start
/**
 * Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let res = []
    const helper = (root, str) => {
        if (root.left) {
            helper(root.left, str + root.val)
        }
        if (root.right) {
            helper(root.right, str + root.val)
        }
        if (!root.left && !root.right) {
            res.push(str + root.val)
        }
    }
    helper(root, "")
    return res.reduce((acc, curr) => {
        acc += +curr
        return acc
    }, 0)
};
// @lc code=end
// [0,7,4,4,6,null,null,null,2,null,null,3]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var root = new TreeNode(4)
root.left = new TreeNode(9)
root.right = new TreeNode(0)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(1)
let res = sumNumbers(root)