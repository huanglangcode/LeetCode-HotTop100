/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) {
        return '';
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let curr = queue.shift();
            if (!curr) {
                result.push("null");
                continue;
            }
            result.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    console.log('result :>> ', result);
    return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let arr = data.split(",");
    // ['1', '2', '3', 'null', 'null', '4', '5', 'null', 'null','null', 'null']
    let root = new TreeNode(+arr[0]);
    let queue = [root];
    for (let i = 1; i < arr.length; i++) {
        let parent = queue.shift();
        if (arr[i] !== 'null') {
            let left = new TreeNode(+arr[i]);
            parent.left = left;
            queue.push(left);
        }
        if (arr[++i] !== 'null' && i < arr.length) {
            let right = new TreeNode(+arr[i]);
            parent.right = right;
            queue.push(right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// @lc code=end
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
let res = deserialize(serialize(root));
// let res = serialize(root);
console.log('res :>> ', res);