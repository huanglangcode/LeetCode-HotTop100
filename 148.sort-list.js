/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    return helper(head)
};

var helper = (head) => {
    if (!head || !head.next) {
        return head
    }
    let [l, r] = cut(head)
    let left = helper(l)
    let right = helper(r)
    return merge(left, right)
}

var cut = (head) => {
    let slow = head
    let fast = head.next
    while (!!fast && !!fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let r = slow.next
    slow.next = null
    return [head, r]
}

var merge = (l, r) => {
    let node = new ListNode(-1)
    let temp = node
    while (l && r) {
        if (l.val < r.val) {
            temp.next = l
            l = l.next
        } else {
            temp.next = r
            r = r.next
        }
        temp = temp.next
    }
    temp.next = !!l ? l : r
    // console.log('node :>> ', node);
    return node.next
}
// [4,6,1,3,2,7,5]
var head = new ListNode(4)
head.next = new ListNode(6)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(2)
head.next.next.next.next.next = new ListNode(7)
head.next.next.next.next.next.next = new ListNode(5)
sortList(head)