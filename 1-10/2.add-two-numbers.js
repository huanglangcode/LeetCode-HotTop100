/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 342+465= 807 最终返回的是 7 -> 0 -> 8 
 */
//注意进位 注意最后剩余的进位 注意两个链表长度不一致
// !!!最终返回的是7 0 8 !!!
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0)
  let temp = result
  let nextBit = 0
  while (l1 || l2) {
    let val1 = !!l1 ? l1.val : 0
    let val2 = !!l2 ? l2.val : 0
    let cur = (val1 + val2 + nextBit) % 10
    nextBit = val1 + val2 + nextBit >= 10 ? 1 : 0
    temp.next = new ListNode(cur)
    temp = temp.next
    l1 = !!l1 ? l1.next : null
    l2 = !!l2 ? l2.next : null
  }
  if (nextBit > 0) {
    temp.next = new ListNode(nextBit)
  }
  return result.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var l1 = new ListNode(5)
l1.next = new ListNode(6)
l1.next.next = new ListNode(4)

var l2 = new ListNode(5)
l2.next = new ListNode(3)

addTwoNumbers(l1,l2)
