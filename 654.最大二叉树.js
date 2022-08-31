/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
    const [pivot, val] = helper(nums)
    return new TreeNode(val, constructMaximumBinaryTree(nums.slice(0, pivot)), constructMaximumBinaryTree(nums.slice(pivot + 1)))
};

const helper = (arr) => {
    let idx = 0, max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            idx = i
            max = arr[i]
        }
    }
    return [idx, max]
}
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var nums = [3, 2, 1, 6, 0, 5]

let res = constructMaximumBinaryTree(nums)
console.log('res', res)