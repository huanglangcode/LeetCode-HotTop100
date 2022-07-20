/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// var BSTIterator = function (root) {
//     this.cur = root;
//     this.stack = [];
// };

// BSTIterator.prototype.next = function () {
//     while (this.cur) {
//         this.stack.push(this.cur);
//         this.cur = this.cur.left;
//     }
//     this.cur = this.stack.pop();
//     const ret = this.cur.val;
//     this.cur = this.cur.right;
//     return ret;
// };

function* BSTIterator(root) {
    let cur = root;
    let stack = []
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        const res = cur.val
        cur = cur.right
        yield res
    }
    return undefined
}

function* BSTIteratorReverse(root) {
    let cur = root;
    let stack = []
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.right
        }
        cur = stack.pop()
        const res = cur.val
        cur = cur.left
        yield res
    }
    return undefined
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const leftGen = BSTIterator(root), rightGen = BSTIteratorReverse(root)
    let left = leftGen.next().value, right = rightGen.next().value
    console.log('left, right :>> ', left, right);
    while (true) {
        if (left + right < k) {
            left = leftGen.next().value
            console.log('left :>> ', left);
        } else if (left + right > k) {
            right = rightGen.next().value
            console.log('right :>> ', right);
        } else {
            return true
        }
    }
    // return false
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// @lc code=end

// 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
let root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right = new TreeNode(6)
// root.left = new TreeNode(6)
root.right.right = new TreeNode(7)
let res = findTarget(root, 20)
console.log('res :>> ', res);