/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
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
 */
class Solution {
    constructor(head) {
        this.head = head;
        this.size = 0
        while (head) {
            head = head.next
            this.size++
        }
    }
    /**
     * @return {number}
     */
    getRandom() {
        let r = Math.floor(Math.random() * this.size)
        let res = this.head
        while (r) {
            res = res.next
            r--
        }
        return res.val
    }
}


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=end
var head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
var obj = new Solution(head)

let res = obj.getRandom()
console.log('res :>> ', res);