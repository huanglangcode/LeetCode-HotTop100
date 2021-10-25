/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || !matrix.length) return false;
    const rows = matrix.length;
    const cols = matrix[0].length;
    function hasTarget(startRow, endRow, startCol, endCol) {
        if (startRow > endRow || startCol > endCol) return false;

        const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
        const middleCol = Math.floor((endCol - startCol) / 2) + startCol;

        if (matrix[middleRow][middleCol] === target) return true;

        if (matrix[middleRow][middleCol] < target) {
            return hasTarget(middleRow + 1, endRow, startCol, endCol) ||
                hasTarget(startRow, middleRow, middleCol + 1, endCol);
        } else {
            return hasTarget(startRow, endRow, startCol, middleCol - 1) ||
                hasTarget(startRow, middleRow - 1, middleCol, endCol);
        }
    }
    return hasTarget(0, rows - 1, 0, cols - 1);
};
// @lc code=end

let res = searchMatrix(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],
    27
)

console.log('res :>> ', res);