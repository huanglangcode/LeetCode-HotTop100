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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let arr = new Array(11)
    const dfs = (node, parent) => {
        if (!node) return
        arr[node.val] = !!parent ? [parent.val] : []
        if (node.left) {
            arr[node.val].push(node.left.val)
            dfs(node.left, node)
        }
        if (node.right) {
            arr[node.val].push(node.right.val)
            dfs(node.right, node)
        }
    }
    dfs(root, null)
    console.log('arr', arr)
    let queue = [arr[start]], visited = new Set(), level = 0
    visited.add(start)
    while (queue.length) {
        let flag = false
        let len = queue.length
        while (len--) {
            let canReach = queue.pop()
            for (const val of canReach) {
                if (!visited.has(val)) {
                    visited.add(val)
                    queue.unshift(arr[val])
                    flag = true
                }
            }
        }
        if (flag) level++
    }
    return level
};

var root = [1], start = 1

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
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
            if (arr[idx * 2 + 1] !== null && arr[idx * 2 + 1] && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] !== null && arr[idx * 2 + 2] && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}

let tree = buildTree(root)

let r = amountOfTime(tree, start)
console.log('r', r)