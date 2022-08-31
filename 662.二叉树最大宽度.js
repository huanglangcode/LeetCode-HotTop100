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
    -4  -3   -2  -1  1   2    3    4
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
    let max = 0n
    const queue = [[root, 1n]]
    while (queue.length) {
        let length = queue.length
        // 同一层级 记录最小和最大坐标
        let left = 0n, right = 0n
        for (let i = 0; i < length; i++) {
            const [curr, idx] = queue.pop()
            if (i === 0) {
                left = idx
            }
            if (i === length - 1) {
                right = idx
            }
            if (curr.left) queue.unshift([curr.left, 2n * idx])
            if (curr.right) queue.unshift([curr.right, 2n * idx + 1n])
        }
        if (right - left > max) {
            max = right - left
        }
    }
    return max + 1n
};
// @lc code=end

var root = [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, 1, 2, 3, 4, 5, 6]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const buildTree = (arr) => {
    const set = new Set()
    let root = new TreeNode(arr[0])
    set.add(0)
    const queue = [root]
    let idx = 0
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (arr[idx * 2 + 1] !== null && Number.isInteger(arr[idx * 2 + 1]) && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] !== null && Number.isInteger(arr[idx * 2 + 2]) && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}

let r = widthOfBinaryTree(buildTree(root))
console.log('r :>> ', r);