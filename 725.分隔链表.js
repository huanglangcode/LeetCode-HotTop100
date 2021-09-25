/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
    给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
    每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
    这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
    返回一个由上述 k 部分组成的数组。
输入：head = [1,2,3], k = 5
输出：[[1],[2],[3],[],[]]
解释：
第一个元素 output[0] 为 output[0].val = 1 ，output[0].next = null 。
最后一个元素 output[4] 为 null ，但它作为 ListNode 的字符串表示是 [] 。
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let length = 0
    let p = head
    while (p) {
        length++
        p = p.next
    }
    let eachCount = parseInt(length / k)
    let remain = length % k
    let resArr = []
    while (k--) {
        let p = remain > 0 ? eachCount + 1 : eachCount
        remain--
        if (!p) {
            resArr.push(null)
        } else {
            let node = new ListNode(null)
            let z = node
            for (let i = 0; i < p; i++) {
                z.next = new ListNode(head.val)
                z = z.next
                head = head.next
            }
            resArr.push(node.next)
        }
    }
    return resArr
};
// @lc code=end

var headArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const buildListNode = (arr) => {
    let node = new ListNode(null)
    let p = node
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        p.next = new ListNode(val)
        p = p.next
    }
    return node.next
}

const head = buildListNode(headArr)

splitListToParts(head, 15)