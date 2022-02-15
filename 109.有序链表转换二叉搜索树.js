/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 * 
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:
给定的有序链表： [-10, -3, 0, 5, 9],
一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
      0
     / \
   -3   9
   /   /
 -10  5
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    const helper = (l, r) => {
        if (l > r) return null
        let mid = l + r >> 1
        let root = new TreeNode(arr[mid])
        root.left = helper(l, mid - 1)
        root.right = helper(mid + 1, r)
        return root
    }
    return helper(0, arr.length - 1)
};
// @lc code=end

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// [0,1,2,3,4,5]
let head = new ListNode(0)
head.next = new ListNode(1)
var a = head.next
a.next = new ListNode(2)
var b = a.next
b.next = new ListNode(3)
var c = b.next
c.next = new ListNode(4)
var d = c.next
d.next = new ListNode(5)
let res = sortedListToBST(head)
console.log('res :>> ', res);


/**
 *  0 1 2 3 4 5
 *  中序遍历
 */