/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let stack = [], node = head
    if (!node) return
    while (node) {
        stack.push(node)
        node = node.next
    }

    let len = stack.length
    node = head
    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            node.next = stack.shift()
        } else {
            node.next = stack.pop()
        }
        node = node.next
    }
    node.next = null
};
// @lc code=end

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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
let head = buildList([1, 2, 3, 4])
// 1 2 3 4 5 6 
// 1 6 2 5 3 4

reorderList(head, 3)