/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @return {ListNode}
 */

var insertionSortList = function (head) {
    let p = new ListNode(Number.MIN_SAFE_INTEGER)
    while (head) {
        let val = head.val
        let node = p
        while (node) {
            if (val > node.val && !node.next) {
                node.next = new ListNode(val)
                break
            } else if (val > node.val && val <= node.next.val) {
                let z = node.next
                node.next = new ListNode(val)
                node.next.next = z
                break
            } else if (val > node.val && val > node.next.val) {
                node = node.next
            } else if (val <= node.val) {
                let z = node.next
                node.next = new ListNode(val)
                node.next.next = z
                break
            }
        }
        head = head.next
    }
    return p.next
};
// @lc code=end
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 4->2->1->3
let node = new ListNode(4)
node.next = new ListNode(2)
node.next.next = new ListNode(1)
node.next.next.next = new ListNode(3)
insertionSortList(node)