/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * 
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 *  示例 1：
 *  输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 *  输出：[[5,4,11,2],[5,8,4,5]]
 
 *  示例 2：
 *  输入：root = [1,2,3], targetSum = 5
 *  输出：[]
 
 *  示例 3：
 *  输入：root = [1,2], targetSum = 0
 *  输出：[]
 
 *  提示：
 *  树中节点总数在范围 [0, 5000] 内
 *  -1000 <= Node.val <= 1000
 *  -1000 <= targetSum <= 1000
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let arr = []
    const helper = (node, curr, sum) => {
        if (!node) {
            return
        }
        if (sum + node.val === targetSum && !node.left && !node.right) {
            arr.push([...curr.concat(node.val)])
        }
        if (node.left) {
            helper(node.left, curr.concat(node.val), sum + node.val)
        }
        if (node.right) {
            helper(node.right, curr.concat(node.val), sum + node.val)
        }
    }
    helper(root, [], 0)
    console.log('arr :>> ', arr);
    return arr
};
// @lc code=end

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// let root = new TreeNode(5)
// root.left = new TreeNode(4)
// root.left.left = new TreeNode(11)
// root.left.left.left = new TreeNode(7)
// root.left.left.right = new TreeNode(2)

// root.right = new TreeNode(8)
// root.right.left = new TreeNode(13)
// root.right.right = new TreeNode(4)
// root.right.right.left = new TreeNode(5)
// root.right.right.right = new TreeNode(1)


let root = new TreeNode(1)
root.left = new TreeNode(2)
pathSum(root, 1)