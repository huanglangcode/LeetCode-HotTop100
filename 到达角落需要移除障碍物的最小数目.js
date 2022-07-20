var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 *
 * @param grid number[][]
 * @returns
 */
var DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
function minimumObstacles(grid) {
    var m = grid.length, n = grid[0].length;
    var dp = __spreadArray([], new Array(m), true).map(function (_) { return new Array(n).fill(Infinity); });
    dp[0][0] = 100;
    var queue = [];
    queue.push([0, 0]);
    while (queue.length) {
        var _a = queue.pop(), i = _a[0], j = _a[1];
        for (var _i = 0, DIRS_1 = DIRS; _i < DIRS_1.length; _i++) {
            var _b = DIRS_1[_i], x = _b[0], y = _b[1];
            var nX = i + x, nY = j + y;
            if (nX >= 0 && nX < m && nY >= 0 && nY < n) {
                var val = grid[nX][nY];
                if (dp[i][j] + val < dp[nX][nY]) {
                    dp[nX][nY] = dp[i][j] + val;
                    (val === 0 ? queue.push([nX, nY]) : queue.unshift([nX, nY]));
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
var res = minimumObstacles(grid);
console.log('res :>> ', res);
