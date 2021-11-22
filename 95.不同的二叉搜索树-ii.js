/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n, l = 1, r = n, res = []) {
    // for (let i = l; i <= r; i++) {
    //     for (const left of generateTrees(n, l, i - 1)) {
    //         for (const right of generateTrees(n, i + 1, r)) {
    //             res.push({ val: i, left, right });
    //         }
    //     }
    // }
    // return n ? res.length ? res : [null] : [];
    const helper = (left, right) => {

        for (let i = left; i <= right; i++) {
            
        }
    }
    helper(1, n)
};
// @lc code=end

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let res = generateTrees(5)
console.log('JSON.stringify(res) :>> ', res);