/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = [root]
    while (queue.length) {
        let temp = []
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            temp.push(curr.val)
            if (curr.children) {
                for (const child of curr.children) {
                    queue.unshift(child)
                }
            }
        }
        res.push(temp)
    }
    return res
};
// @lc code=end

function Node(val, children) {
    this.val = val;
    this.children = children;
};
// 输入：root = [1,null,3,2,4,null,5,6]
let root = new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])

let res = levelOrder(root)
console.log('res',res);