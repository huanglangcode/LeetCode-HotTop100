/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。
输入: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

输出: 4
解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。

输入: 

          1
          0
         /  
        3
        -1    
       / \       
      5   3     
      -2  -1

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。

输入:
                 1
                 0
          3              2
         -1              1
      5       x        x        9 
     -2      -1        1        2
    6   x    x   x   x   x    x    7
    -4  -3   -2   -1 1   2    3    4
  8  x x x  x x x x x x x x  x x 10 x
  -8                1 2 3 4  5 6 7  8

1 2 4 8 16 32 64
输出: 8
解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    let maxWidth = 1;
    // 记录每一层的最小和最大  *2 *2+1    *2-1 *2
    let p = {}
    const helper = (node, level, idx) => {
        if (!node) { return }
        if (p[level] === undefined) {
            p[level] = [idx, idx]
        }
        p[level][0] = Math.min(idx, p[level][0])
        p[level][1] = Math.max(idx, p[level][1])
        if (idx === 0) {
            helper(node.left, level + 1, idx - 1)
            helper(node.right, level + 1, idx + 1)
        } else if (idx > 0) {
            helper(node.left, level + 1, idx * 2 - 1)
            helper(node.right, level + 1, idx * 2)
        } else if (idx < 0) {
            helper(node.left, level + 1, idx * 2)
            helper(node.right, level + 1, idx * 2 + 1)
        }
    }
    helper(root, 0, 0)
    console.log('p :>> ', p);
    for (const [left, right] of Object.values(p)) {
        if (left === right) continue
        if (left * right > 0) {
            maxWidth = Math.max(maxWidth, right - left + 1)
        } else {
            maxWidth = Math.max(maxWidth, right - left)
        }
    }
    return maxWidth;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [1,3,null,5,3]
// let root = new TreeNode(1)

// root.left = new TreeNode(3)
// root.left.left = new TreeNode(5)
// root.left.left.left = new TreeNode(6)
// root.left.left.left.left = new TreeNode(8)
// root.right = new TreeNode(2)
// root.right.right = new TreeNode(9)
// root.right.right.right = new TreeNode(7)
// root.right.right.right.left = new TreeNode(10)

let root = new TreeNode(1)

root.left = new TreeNode(3)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(3)

let r = widthOfBinaryTree(root)
console.log('r :>> ', r);