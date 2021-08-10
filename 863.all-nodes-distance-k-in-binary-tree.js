/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

给定二叉树的根、目标节点的值target和整数k，返回一个数组，该数组包含到目标节点距离为k的所有节点的值。你可以以任何顺序返回答案。

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
         3
      5     1
    6  2   0  8
      7 4
Output: [7,4,1]
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let map = new Map();
    // 找到target的父节点
    const findParent = (node) => {
        if (node.left) {
            map.set(node.left.val, node);
            findParent(node.left);
        }
        if (node.right) {
            map.set(node.right.val, node);
            findParent(node.right);
        }
    };
    findParent(root);
    let ans = [];
    const helper = (node, distance, comeFrom) => {
        if (distance === k) {
            ans.push(node.val);
            return;
        }
        if (node.left && distance < k && node.left !== comeFrom) {
            helper(node.left, distance + 1, node);
        }
        if (node.right && distance < k && node.right !== comeFrom) {
            helper(node.right, distance + 1, node);
        }
        if (map.has(node.val)) {
            let parent = map.get(node.val);
            if (parent !== comeFrom) {
                helper(parent, distance + 1, node);
            }
        }

    };
    helper(target, 0, null);
    return ans;
};
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let node = new TreeNode(3);
node.left = new TreeNode(5);
node.right = new TreeNode(1);
node.left.left = new TreeNode(6);
node.left.right = new TreeNode(2);
node.left.right.left = new TreeNode(7);
node.left.right.right = new TreeNode(4);
node.right.left = new TreeNode(0);
node.right.right = new TreeNode(8);


let node2 = new TreeNode(0);
node2.left = new TreeNode(2);
node2.right = new TreeNode(1);
node2.right.left = new TreeNode(3);

distanceK(node, node.left, 2);