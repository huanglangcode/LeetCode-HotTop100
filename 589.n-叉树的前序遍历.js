/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) { return [] }
    let res = [], queue = [root]
    while (queue.length) {
        let node = queue.pop()
        res.push(node.val)
        if (node.children) {
            queue.push(...node.children.reverse())
        }
    }
    return res
};
// @lc code=end

// const root = [1, null, 3, 2, 4, null, 5, 6]

function Node(val, children) {
    this.val = val;
    this.children = children;
};

var root = new Node(1, [
    new Node(3, [new Node(5), new Node(6)]),
    new Node(2),
    new Node(4),
])
let res = preorder(root)
console.log('res :>> ', res);  // 1 3 5 6 2 4