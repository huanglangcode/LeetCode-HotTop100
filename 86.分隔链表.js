/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let lNode = new ListNode(0)
    let rNode = new ListNode(0)
    let node = head, l = lNode, r = rNode
    while (node) {
        if (node.val < x) {
            l.next = node
            l = l.next
        } else {
            r.next = node
            r = r.next
        }
        node = node.next
    }
    r.next = null
    l.next = rNode.next
    return lNode.next
};
// @lc code=end
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {Array} arr
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
let head = buildList([1, 4, 3, 2, 5, 2])

partition(head, 3)
// 1 -> 4 -> 3 -> 2 -> 5 -> 2
// i         j    n
// 1 -> 2 -> 4 -> 3 -> 5 -> 2
//      i              j    n
// 1 -> 2 -> 2 -> 4 -> 3 -> 5
//           i              j