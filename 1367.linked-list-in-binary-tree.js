/*
 * @lc app=leetcode id=1367 lang=javascript
 *
 * [1367] Linked List in Binary Tree
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSubPath = function (head, root) {

// };

// class TreeNode {
//   constructor(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
//   }
// }

// isSubPath([1,4,2,6], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3])
// @lc code=end

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]){
      nums.splice(i, 1)
      i--
    }
  }
  console.log('nums :>> ', nums)
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])