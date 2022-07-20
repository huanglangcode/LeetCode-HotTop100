/**
 *
 * @param grid number[][]
 * @returns
 */
const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]]
function minimumObstacles(grid: number[][]): number {
    let m = grid.length,
        n = grid[0].length;
    let dp: number[][] = [...new Array(m)].map((_) => new Array(n).fill(Infinity));
    dp[0][0] = 0;
    let queue: any[][] = [];
    queue.push([0, 0]);
    while (queue.length) {
        const [i, j] = queue.pop()
        for (const [x, y] of DIRS) {
            let nX = i + x, nY = j + y
            if (nX >= 0 && nX < m && nY >= 0 && nY < n) {
                let val = grid[nX][nY]
                if (dp[i][j] + val < dp[nX][nY]) {
                    dp[nX][nY] = dp[i][j] + val;
                    (val === 0 ? queue.push([nX, nY]) : queue.unshift([nX, nY]))
                }
            }
        }
    }
    
    return dp[m - 1][n - 1];
}

var grid = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
];

let res = minimumObstacles(grid);
console.log('res :>> ', res);
