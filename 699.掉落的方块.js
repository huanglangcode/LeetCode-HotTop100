/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
    // 默认每个方块的位置及高度
    const arr = positions.map(ele => [ele[0], ele[0] + ele[1], ele[1]])
    let res = [], falled = [], max = 0
    // 取自己和已跌落过的最大值 + 自己 . 更新跌落过的区域的最大值 
    // 比如此时落的是 1-5区域边长为3的. 底座已有4-6的边长为2的 此时 更新 1-5区域最大值为3+2
    for (const [l, r, height] of arr) {
        let temp = 0
        for (const [l2, r2, height2] of falled) {
            if (r2 <= l || l2 >= r) continue
            temp = Math.max(temp, height2)
        }
        falled.push([l, r, temp + height])
        max = Math.max(max, temp + height)
        res.push(max)
    };
    return res
}

var positions = [[1, 2], [2, 3], [6, 1]]
let res = fallingSquares(positions)
console.log('res :>> ', res);