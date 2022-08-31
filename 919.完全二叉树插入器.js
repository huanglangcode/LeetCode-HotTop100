/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
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
 */
class CBTInserter {
    list = []
    idx = 0
    constructor(root) {
        this.list.push(root)
        let curr = 0
        while (curr < this.list.length) {
            let flag = true
            if (this.list[curr].left) {
                flag = false
                this.list.push(this.list[curr].left)
            }
            if (this.list[curr].right) {
                flag = false
                this.list.push(this.list[curr].right)
            }
            if (flag) break
            curr++
        }
    }

    insert(val) {
        const node = new TreeNode(val)
        while (this.list[this.idx].left && this.list[this.idx].right) {
            this.idx++
        }
        let lastRoot = this.list[this.idx]
        if (lastRoot.left) {
            lastRoot.right = node
        } else {
            lastRoot.left = node
        }
        this.list.push(node)
        return lastRoot
    }

    get_root() {
        return this.list[0]
    }
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
var arr = [1]
// 解释
var cBTInserter = new CBTInserter(buildTree(arr));
console.log(cBTInserter.insert(2))  // 返回 1
console.log(cBTInserter.insert(3))  // 返回 2
console.log(cBTInserter.insert(4))  // 返回 2
console.log(cBTInserter.get_root()); // 返回 [1, 2, 3, 4]

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

