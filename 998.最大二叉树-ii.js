/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
 */

// @lc code=start

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const buildTree = (arr) => {
    const set = new Set()
    let root = new TreeNode(+arr[0])
    set.add(0)
    const queue = [root]
    let idx = 0
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (arr[idx * 2 + 1] !== null && Number.isInteger(+arr[idx * 2 + 1]) && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(+arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] !== null && Number.isInteger(+arr[idx * 2 + 2]) && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(+arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
    const node = new TreeNode(val);
    if (!root) {
        return node;
    }
    if (val > root.val) {
        node.left = root
        return node;
    }
    root.right = insertIntoMaxTree(root.right, val);
    return root;
};
// @lc code=end

var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
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
    const [pivot, val] = helper(nums)
    let root = new TreeNode(val)
    root.left = constructMaximumBinaryTree(nums.slice(0, pivot))
    root.right = constructMaximumBinaryTree(nums.slice(pivot + 1))
    return root
};

var root = [4, 1, 3, null, null, 2], val = 5
root = buildTree(root)

let res = insertIntoMaxTree(root, val)
console.log('res', res)
