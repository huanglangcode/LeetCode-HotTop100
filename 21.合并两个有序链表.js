/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(-200)
    let q = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            q.next = new ListNode(list1.val)
            q = q.next
            list1 = list1.next
        } else {
            q.next = new ListNode(list2.val)
            q = q.next
            list2 = list2.next
        }
    }
    while (list1) {
        q.next = new ListNode(list1.val)
        q = q.next
        list1 = list1.next
    }
    while (list2) {
        q.next = new ListNode(list2.val)
        q = q.next
        list2 = list2.next
    }
    return head.next
};
// @lc code=end