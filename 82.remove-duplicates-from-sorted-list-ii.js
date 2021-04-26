/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *     dummy := new(ListNode)
    dummy.Next = head
    prev := dummy

    for head != nil && head.Next != nil {
        if head.Val == head.Next.Val {
            for head.Next != nil && head.Val == head.Next.Val {
                head.Next = head.Next.Next
            }
            prev.Next = head.Next
        } else {
            prev = head
        }
        head = head.Next
    }
    return dummy.Next

作者：xiao_ben_zhu
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/shou-hua-tu-jie-die-dai-he-di-gui-liang-7hbvx/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * 
 * 
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = new ListNode(-101)
    node.next = head
    let pre = node
    while (head && head.next) {
        if (head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head.next = head.next.next
            }
            pre.next = head.next
        } else {
            pre = head
        }
        head = head.next
    }
    return node.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// [1,2,3,3,4,4,5]
var head = new ListNode(1)
head.next = new ListNode(1)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(3)
// head.next.next.next.next = new ListNode(4)
// head.next.next.next.next.next = new ListNode(4)
// head.next.next.next.next.next.next = new ListNode(5)
deleteDuplicates(head)