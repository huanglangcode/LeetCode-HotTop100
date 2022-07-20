/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIRS = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
]
var numEnclaves = function (grid) {
    let startArr = [],
        m = grid.length;
    n = grid[0].length, oneCnt = 0, set = new Set()
    let on = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                on++
                if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
                    set.add(`${i}_${j}`)
                    startArr.push([i, j])
                }
            }
        }
    }
    console.log(set)
    while (startArr.length) {
        let [i, j] = startArr.shift()
        console.log('i', 'j', i, j)
        for (const [x, y] of DIRS) {
            let nextI = i + x
            let nextY = j + y
            if (nextI >= 0 && nextY >= 0 && nextI < m && nextY < n && grid[nextI][nextY] === 1 && !set.has(`${nextI}_${nextY}`)) {
                set.add(`${nextI}_${nextY}`)
                startArr.push([nextI, nextY])
            }
        }
    }
    console.log(set)
    console.log('oneRealyCnt', on)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !set.has(`${i}_${j}`)) {
                console.log(i, j)
                oneCnt++
            }
        }
    }
    return oneCnt
};

var arr = [
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
]
numEnclaves(arr)