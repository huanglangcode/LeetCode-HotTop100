/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let begin = head
    let pre = head
    while (begin.val !== left) {
        pre = begin
        begin = begin.next
    }
    let curr = pre.next
    for (let i = 0; i < right - left; i++) {
        const next = curr.next
        curr.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return head
};
// @lc code=end
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

// var head = new ListNode(1)
// let node = head
// for (let i = 2; i <= 6; i++) {
//     node.next = new ListNode(i)
//     node = node.next
// }
// reverseBetween(head, 2, 5)