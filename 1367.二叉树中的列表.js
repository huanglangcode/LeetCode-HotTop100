/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
提示：
二叉树和链表中的每个节点的值都满足 1 <= node.val <= 100 。
链表包含的节点数目在 1 到 100 之间。
二叉树包含的节点数目在 1 到 2500 之间。

 */

var buildList = (arr) => {
    let head = new ListNode()
    let node = head
    while (arr.length) {
        let ele = arr.shift()
        node.next = new ListNode(ele)
        node = node.next
    }
    return head.next
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
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
// @lc code=start
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    if (!root) return false
    return isSub(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
};

const isSub = (list, tree) => {
    if (!list || !tree) {
        if (!list) return true
        return false
    }
    return list.val === tree.val && isSub(list.next, tree.left) || isSub(list.next, tree.right)
}
// @lc code=end



var head = [4, 2, 8], root = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]

// head = [2, 2, 1]
// root = [2, null, 3, null, 2, null, 2, null, 1]

let list = buildList(head)
let tree = buildTree(root)

let bool = isSubPath(list, tree)
console.log('bool', bool)