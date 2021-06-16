/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.

 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let aLength = 0, bLength = 0;
    let a = headA;
    let b = headB;
    while (a) {
        a = a.next;
        aLength++;
    }
    while (b) {
        b = b.next;
        bLength++;
    }
    let diff = Math.abs(aLength - bLength);
    a = headA;
    b = headB;
    while (diff > 0) {
        if (aLength > bLength) {
            a = a.next;
        } else {
            b = b.next;
        }
        diff--;
    }
    while (a) {
        if (a === b) {
            return true;
        }
        a = a.next;
        b = b.next;
    }
    return false;
};
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var node = new ListNode(8);
node.next = new ListNode(4);
node.next.next = new ListNode(5);

var a = new ListNode(4);
a.next = new ListNode(1);
a.next.next = node;
var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(1);
b.next.next.next = node;
// @lc code=end

getIntersectionNode(a, b);