/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
    let res = 0
    const helper = (node, arr) => {
        if (!node.left && !node.right) {
            res += Number.parseInt(arr.join(""), 2)
            return
        }
        if (node.left) {
            helper(node.left, arr.concat(node.left.val))
        }

        if (node.right) {
            helper(node.right, arr.concat(node.right.val))
        }
    }
    helper(root, [root.val])
    return res
};
// @lc code=end



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1)
root.left = new TreeNode(0)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(1)


let res = sumRootToLeaf(root)
console.log('res :>> ', res);