/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let result = new ListNode(0)
  let point = result
  while (lists.length > 0) {
    let currMin = { val: Number.MAX_SAFE_INTEGER, index: -1 }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] && lists[i].val < currMin.val) {
        currMin.val = lists[i].val
        currMin.index = i
      }
    }
    if (currMin.index === -1) {
      break
    }
    lists[currMin.index] = lists[currMin.index].next
    if (!lists[currMin.index]) {
      lists.splice(currMin.index, 1)
    }
    point.next = new ListNode(currMin.val)
    point = point.next
  }
  return result.next
}
// @lc code=end

