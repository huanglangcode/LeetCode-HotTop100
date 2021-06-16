/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// [3,5,1,6,2,9,8,null,null,7,4]
// [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// var leafSimilar = function (root1, root2) {
//     let arr1 = [];
//     let arr2 = [];
//     helper(root1, arr1);
//     helper(root2, arr2);
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// };

// const helper = (root, arr) => {
//     if (!root) {
//         return;
//     }
//     helper(root.left, arr);
//     helper(root.right, arr);
//     if (!root.left && !root.right) {
//         arr.push(root.val);
//     }
// };
// [3,5,1,6,2,9,8,null,null,7,4]
// [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
var leafSimilar = function (root1, root2) {
    const arr1 = helper(root1);
    const arr2 = helper(root2);
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
function helper(root) {
    let stack = [];
    let node = root;
    let arr = [];
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (!node.left && !node.right) {
            arr.push(node.val);
        }
        node = node.right;
    }
    return arr;
}
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const arrToTree = (array) => {
    if (array === null || array.length === 0 || array[0] === null) {
        return null;
    }
    let index = 0;
    let length = array.length;
    const root = new TreeNode(array[0]);
    const nodeQueue = [];
    nodeQueue.push(root);
    let currNode;
    while (index < length) {
        index++;
        if (index >= length) {
            return root;
        }
        currNode = nodeQueue.shift();
        let leftChild = array[index];
        if (leftChild != null) {
            currNode.left = new TreeNode(leftChild);
            nodeQueue.push(currNode.left);
        }
        index++;
        if (index >= length) {
            return root;
        }
        let rightChild = array[index];
        if (rightChild != null) {
            currNode.right = new TreeNode(rightChild);
            nodeQueue.push(currNode.right);
        }
    }
    return root;
};

let root1 = arrToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
let root2 = arrToTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);

leafSimilar(root1, root2);

// @lc code=end

