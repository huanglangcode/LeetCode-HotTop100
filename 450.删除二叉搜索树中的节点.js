/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null
    let head = new TreeNode(-1e6)
    head.right = root
    let node = head, pre = head
    while (node.val !== key) {
        pre = node
        if (key < node.val) {
            node = node.left
        } else if (key > node.val) {
            node = node.right
        }
        if (!node) return root
    }
    const helper = (node) => {
        if (!node.left) {
            return node.right
        }
        if (!node.right) {
            return node.left
        }
        //找到右子树的最左值(最小值)
        if (node.left && node.right) {
            let t = node.right;
            while (t.left) t = t.left;
            t.left = node.left
            return node.right
        }
    }
    if (pre.left === node) {
        pre.left = helper(node)
    } else if (pre.right === node) {
        pre.right = helper(node)
    }
    return head.right
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [5,3,6,2,4,null,7]
let root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right = new TreeNode(7)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(8)


/***
 *        5
 *     3    7
 *    2 4  6 8
 * 
 * [6,3,7,2,4,null,8]
 *      6
 *    3   7
 *  2  4   8
 */

let r = deleteNode(root, 0)
console.log('r :>> ', r);