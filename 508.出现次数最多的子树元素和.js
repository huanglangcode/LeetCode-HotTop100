/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    let hash = new Map()
    const helper = (node) => {
        hash.set(node, { sum: node.val })
        if (node.left) {
            hash.get(node).sum += helper(node.left)
        }
        if (node.right) {
            hash.get(node).sum += helper(node.right)
        }
        return hash.get(node).sum
    }
    helper(root)
    let maxFreq = 0, hash2 = {}
    for (const { sum: val } of hash.values()) {
        hash2[val] = hash2[val] + 1 || 1
        maxFreq = Math.max(hash2[val], maxFreq)
    }
    let res = []
    for (const [key, val] of Object.entries(hash2)) {
        if (val === maxFreq) {
            res.push(+key)
        }
    }
    return res
};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(5)
root.left = new TreeNode(2)
root.right = new TreeNode(-5)

let v = findFrequentTreeSum(root)
console.log('v :>> ', v);