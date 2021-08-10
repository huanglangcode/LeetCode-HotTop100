/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// parseInt(+[1,1,1,0,0,0,0,0,0].join(''), 2) | parseInt(+[0,0,0,1,1,1,0,0,0].join(''), 2) | parseInt(+[0,0,0,0,0,0,1,1,0].join(''), 2)

var solveSudoku = function (board) {
    let heng = new Array(9).fill(0).map(ele => ele = new Array(9).fill(0));
    let zong = new Array(9).fill(0).map(ele => ele = new Array(9).fill(0));
    let cube = new Array(9).fill(0).map(ele => ele = new Array(9).fill(0));
    let p = [];
    initState(board, heng, zong, cube, p);
    const backtracking = (idx) => {
        if (idx >= p.length) {
            return true;
        }
        const pos = p[idx];
        const possible = getPossible(heng, zong, cube, pos[0], pos[1]);
        if (!possible.length) {
            return false;
        }
        for (let i = 0; i < possible.length; i++) {
            let s = possible[i];
            board[pos[0]][pos[1]] = s.toString();
            heng[pos[0]][s - 1] = 1;
            zong[pos[1]][s - 1] = 1;
            cube[Math.floor(pos[0] / 3) * 3 + Math.floor(pos[1] / 3)][s - 1] = 1;
            if (backtracking(idx + 1)) {
                return true;
            }
            board[pos[0]][pos[1]] = ".";
            heng[pos[0]][s - 1] = 0;
            zong[pos[1]][s - 1] = 0;
            cube[Math.floor(pos[0] / 3) * 3 + Math.floor(pos[1] / 3)][s - 1] = 0;
        }
        return false;
    };
    backtracking(0);
    return board;
};
var initState = (board, heng, zong, cube, p) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let curr = parseInt(board[i][j]);
            if (Number.isInteger(curr)) {
                heng[i][curr - 1] = 1;
                zong[j][curr - 1] = 1;
                cube[Math.floor(i / 3) * 3 + Math.floor(j / 3)][curr - 1] = 1;
            } else {
                p.push([i, j]);
            }
        }
    }
};

var getPossible = (heng, zong, cube, i, j) => {
    let possibleStr = ((parseInt(heng[i].join(""), 2) | parseInt(zong[j].join(""), 2) | parseInt(cube[Math.floor(i / 3) * 3 + Math.floor(j / 3)].join(""), 2)) ^ ((1 << 9) - 1)).toString(2).padStart(9, "0");
    let result = [];
    for (let i = 0; i < 9; i++) {
        if (+possibleStr[i] === 1) {
            result.push(i + 1);
        }
    }
    return result;
};
// @lc code=end
// let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
let board = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
];
solveSudoku(board);