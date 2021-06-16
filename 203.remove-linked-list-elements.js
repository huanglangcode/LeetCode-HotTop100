/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var removeElements = function (head, val) {
    let node = new ListNode('A');
    node.next = head;
    let temp = node;
    while (temp.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return node.next;
};
var head = new ListNode(6);
head.next = new ListNode(6);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(6);
head.next.next.next.next = new ListNode(7);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(6);
// @lc code=end
removeElements(head, 6);
