/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    root.idx = 0;
    let stack = [root];
    let hash = new Map();
    while (stack.length) {
        let length = stack.length;
        let innerHash = {};
        while (length) {
            let curr = stack.shift();
            if (innerHash[curr.idx]) {
                innerHash[curr.idx].push(curr.val);
            } else {
                innerHash[curr.idx] = new PriorQueue(curr.val);
            }
            if (curr.left) {
                curr.left.idx = curr.idx - 1;
                stack.push(curr.left);
            }
            if (curr.right) {
                curr.right.idx = curr.idx + 1;
                stack.push(curr.right);
            }
            length--;
        }
        for (const key in innerHash) {
            const ele = innerHash[key];
            if (hash.has(key)) {
                let oldVal = hash.get(key);
                oldVal.push(...ele.queue);
                hash.set(key, oldVal);
            } else {
                hash.set(key, ele.queue);
            }
        }
    }
    let ans = [];
    let keys = [...hash.keys()];
    keys.sort((a, b) => a - b).forEach((ele) => {
        let p = hash.get(ele);
        ans.push(p);
    });
    return ans;
};

class PriorQueue {
    constructor(initVal) {
        this.queue = [initVal];
    }
    push(val) {
        if (val <= this.queue[0]) {
            this.queue.unshift(val);
            return;
        }
        if (val > this.queue[this.queue.length - 1]) {
            this.queue.push(val);
            return;
        }
        for (let i = 0; i <= this.queue.length - 2; i++) {
            if (this.queue[i] <= val && val < this.queue[i + 1]) {
                this.queue.splice(i + 1, 0, val); // 插入
                return;
            }
        }
    }
}
// @lc code=end

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var root = new TreeNode(8);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

verticalTraversal(root);

// [0,2,1,3,null,5,22,9,4,12,25,null,null,13,14,8,6,null,null,null,null,null,27,24,26,null,17,7,null,28,null,null,null,null,null,19,null,11,10,null,null,null,23,16,15,20,18,null,null,null,null,null,21,null,null,29]
// [[13,28],[9,24,27,16],[3,8,14,11,19],[2,4,12,7,17,26,15,23,20],[0,5,6,10,21,29],[1,25,18],[22]]
// [[13,28],[9,24,27,16],[3,8,14,11,19],[2,4,12,7,17,26,15,20,23],[0,5,6,10,21,29],[1,25,18],[22]]