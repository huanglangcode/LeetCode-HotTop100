/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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
var reverseList = function (head) {
    if (!head) return null
    let node = new ListNode(null)
    node.next = reverseList(head.next)
    return node
};
// @lc code=end


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

head = [1, 2, 3, 4, 5]

let res = reverseList(buildList(head))
console.log('res', res)