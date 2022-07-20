/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
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
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    const m = grid.length
    const preSum = [...new Array(m +1)].map(_=> new Array(m+1).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            preSum[i + 1][j + 1] = preSum[i + 1][j] + preSum[i][j + 1] - preSum[i][j] + grid[i][j]
        }
    }
    const helper = (x1, y1, x2, y2) => {
        // 求(x1,y1) -> (x2,y2) 面积内的和
        const sum = preSum[x2][y2] + preSum[x1][y1] - preSum[x2][y1] - preSum[x1][y2]
        if (sum === 0) {
            return new Node(false, true)
        } else if (sum === (x2 - x1) * (y2 - y1)) {
            return new Node(true, true)
        } else {
            const midX = Math.floor((x1 + x2) / 2), midY = Math.floor((y1 + y2) / 2)
            return new Node(
                true,
                false,
                // x1, y1, x2, y2
                helper(x1, y1, midX, midY),
                helper(x1, midY, midX, y2),
                helper(midX, y1, x2, midY),
                helper(midX, midY, x2, y2)
            )
        }
    }
    return helper(0, 0, m, m)
};
// @lc code=end

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};

var grid =
    [
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0]
    ]

construct(grid)