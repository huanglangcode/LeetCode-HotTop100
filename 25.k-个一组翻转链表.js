/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
示例 2：


输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
示例 3：

输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]
示例 4：

输入：head = [1], k = 1
输出：[1]
提示：

列表中节点的数量在范围 sz 内
1 <= sz <= 5000
0 <= Node.val <= 1000
1 <= k <= sz


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
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    if (!head) {
        return null
    }
    let node = head
    for (let i = 0; i < k; i++) {
        if (!node) {
            return head
        }
        node = node.next
    }
    let res = reverse(head, k)
    let tail = res
    while (tail.next) {
        tail = tail.next
    }
    tail.next = reverseKGroup(node, k)
    return res
}

function reverse(node, k) {
    let head = null
    while (node && k--) {
        let next = node.next
        node.next = head
        head = node
        node = next
    }
    return head
}
// @lc code=end

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const builder = (arr) => {
    let head = new ListNode()
    let node = head
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }
    return head.next
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 5
let head = builder(arr)
let res = reverseKGroup(head, k)
console.log('res :>> ', res);
