/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
/**
 * 只允许左子树为空时用()替代节点，如果右子树为空或者左右子树都为空就不要瞎折腾了
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
    let res = '',
        stack = [root],
        set = new Set()
    while (stack.length) {
        let top = stack[stack.length - 1]
        if (set.has(top)) {
            stack.pop()
            res += ')'
        } else {
            set.add(top)
            res += `(${top.val}`
            if (!top.left && top.right) {
                res += '()'
            }
            if (top.right) {
                stack.push(top.right)
            }
            if (top.left) {
                stack.push(top.left)
            }
        }
    }
    return res.slice(1, res.length - 1)
};
// @lc code=end
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(4)

let res = tree2str(root)
console.log('res', res);
// 1(2()(4))(3) "1(2()(4))(3)"