/*
 * @lc app=leetcode.cn id=1001 lang=javascript
 *
 * [1001] 网格照明
在大小为 n x n 的网格 grid 上，每个单元格都有一盏灯，最初灯都处于 关闭 状态。

给你一个由灯的位置组成的二维数组 lamps ，
其中 lamps[i] = [rowi, coli] 表示 打开 位于 grid[rowi][coli] 的灯。即便同一盏灯可能在 lamps 中多次列出，不会影响这盏灯处于 打开 状态。

当一盏灯处于打开状态，它将会照亮 自身所在单元格 以及同一 行 、同一 列 和两条 对角线 上的 所有其他单元格 。

另给你一个二维数组 queries ，其中 queries[j] = [rowj, colj] 。
对于第 j 个查询，如果单元格 [rowj, colj] 是被照亮的，则查询结果为 1 ，否则为 0 。
在第 j 次查询之后 [按照查询的顺序] ，关闭 位于单元格 grid[rowj][colj] 上及相邻 8 个方向上（与单元格 grid[rowi][coli] 共享角或边）的任何灯。

返回一个整数数组 ans 作为答案， ans[j] 应等于第 j 次查询 queries[j] 的结果，1 表示照亮，0 表示未照亮。

1 <= n <= 109
0 <= lamps.length <= 20000
0 <= queries.length <= 20000
lamps[i].length == 2
0 <= rowi, coli < n
queries[j].length == 2
0 <= rowj, colj < n
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
const DIRS = [[0, 0], [0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
var gridIllumination = function (n, lamps, queries) {
    const rowCnts = new Map(), colCnts = new Map(), lrCnts = new Map(), rlCnts = new Map(), points = new Set()
    function operateLight(x, y, v = 1) {
        helper(rowCnts, x, v)
        helper(colCnts, y, v)
        helper(lrCnts, x + y, v)
        helper(rlCnts, x - y, v)
    }
    function helper(map, id, val) {
        if (map.has(id)) {
            let v = map.get(id)
            v += val
            if (v === 0) {
                map.delete(id)
            } else {
                map.set(id, v)
            }
        } else {
            map.set(id, val)
        }
    }
    for (const [x, y] of lamps) {
        let p = BigInt(x * n + y)
        if (!points.has(p)) {
            points.add(p)
            operateLight(x, y)
        }
    }
    let ans = Array(queries.length).fill(0)
    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][0], y = queries[i][1]
        if (rowCnts.has(x) || colCnts.has(y) || lrCnts.has(x + y) || rlCnts.has(x - y)) {
            ans[i] = 1
            for (const [a, b] of DIRS) {
                let nextX = x + a, nextY = y + b
                if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < n) {
                    let p = BigInt(nextX * n + nextY)
                    if (points.has(p)) {
                        points.delete(p)
                        operateLight(nextX, nextY, -1)
                    }
                }
            }
        }
    }
    return ans
};
// @lc code=end

// 5
// [[0,0],[4,4]]
// [[1,1],[1,1]]


var n = 5, lamps = [[0, 0], [4, 4]], queries = [[1, 1], [1, 0]]
// let res = { "输出": [1, 1, 0] }
let res = gridIllumination(n, lamps, queries)
console.log('res :>> ', res);

/**
 *  01          07
 *    12      16
 *      23  25  
 *        34
 *      43  45
 *    52      56
 *  61          67
 */