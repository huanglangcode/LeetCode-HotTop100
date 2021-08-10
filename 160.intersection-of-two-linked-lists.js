/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 *  输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
 *  输出：Intersected at '2'
 */

// [0,9,1,2,4] [3,2,4]
// [3,2,4] [0,9,1,2,4]

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 4 1 8 4 5 5 6 1 8 4 5
// 5 6 1 8 4 5 4 1 8 4 5 
var getIntersectionNode = function (headA, headB) {
    let node1 = headA, node2 = headB;
    let flag = false;
    while (node1 || node2) {
        if (node1 === node2) {
            return node1;
        }
        if (node1.next) {
            node1 = node1.next;
        } else {
            if (!flag) {
                node1 = headB;
                flag = true;
            } else {
                return null;
            }
        }
        node2 = node2.next ? node2.next : headA;
    }
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
// a.next.next = node;
var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(1);
b.next.next.next = node;
// @lc code=end

getIntersectionNode(a, b);