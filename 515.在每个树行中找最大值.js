/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
    let ans = []
    if (!root) return ans
    let queue = [root]
    while (queue.length) {
        let max = -Infinity
        let nxtQueue = []
        for (const curr of queue) {
            max = Math.max(curr.val, max)
            if (curr.left) {
                nxtQueue.push(curr.left)
            }
            if (curr.right) {
                nxtQueue.push(curr.right)
            }
        }
        ans.push(max)
        queue = nxtQueue
    }
    return ans
};
// @lc code=end

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
            if (Number.isInteger(+arr[idx * 2 + 1]) && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(+arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (Number.isInteger(+arr[idx * 2 + 2]) && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(+arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}

var arr = [1, 2, 3]
let root = buildTree(arr)
let res = largestValues(root)
console.log('res :>> ', res);