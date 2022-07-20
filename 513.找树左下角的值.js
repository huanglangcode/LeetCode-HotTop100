/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
    let queue = [root], ans = 0
    while (queue.length > 0) {
        ans = queue[0].val
        const nxt = []
        for (const node of queue) {
            if (node.left !== null) {
                nxt.push(node.left)
            }
            if (node.right !== null) {
                nxt.push(node.right)
            }
        }
        queue = nxt
    }
    return ans
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(4)
// root.right = new TreeNode(3)
// root.right.left = new TreeNode(5)
// root.right.left.left = new TreeNode(7)
// root.right.right = new TreeNode(6)

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/**
 *               1
 *        2                 3
 *     4    5        6       7
 *    8 9  10
 * 
 * 
 */
const buildTree = (arr) => {
    const set = new Set()
    let root = new TreeNode(arr[0])
    set.add(0)
    const queue = [root]
    let idx = 0
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (arr[idx * 2 + 1] && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}
// let r = findBottomLeftValue(root)
// console.log('r :>> ', r);
let root = buildTree(arr)
console.log('JSON.stringify(root) :>> ', JSON.stringify(root));

/**
 * 
 *                   0   
 *          1                 2
 *     3        4         5       6
 *   7   8    9  10    11  12   13  14 
 * 
 * 
 */