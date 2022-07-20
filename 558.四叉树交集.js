/*
 * @lc app=leetcode.cn id=558 lang=javascript
 *
 * [558] 四叉树交集
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {TreeNode} quadTree1
 * @param {TreeNode} quadTree2
 * @return {TreeNode}
 */
var intersect = function (quadTree1, quadTree2) {
    if (!quadTree1.isLeaf && !quadTree2.isLeaf) {
        const tl = intersect(quadTree1.topLeft, tree2.topLeft)
        const tr = intersect(quadTree1.topRight, tree2.topRight)
        const bl = intersect(quadTree1.bottomLeft, tree2.bottomLeft)
        const br = intersect(quadTree1.bottomRight, tree2.bottomRight)

    } else if (quadTree1.isLeaf) {

    } else if (quadTree2.isLeaf) {

    } else {

    }
};
// @lc code=end

class TreeNode {
    constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
};