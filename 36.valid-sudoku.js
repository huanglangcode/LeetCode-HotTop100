/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let flag = true
  let heng = new Array(9)
  let zong = new Array(9)
  let kube = new Array(9)
  for (let i = 0; i < kube.length; i++) {
    kube[i] = []
  }
  for(let i =0; i< 9;i++){
    for(let j = 0; j < 9; j++){
      let curHengEle = +board[i][j]
      let curZongEle = +board[j][i]
      if(heng.includes(curHengEle) || zong.includes(curZongEle) || kube[Math.floor(i/3) * 3 + Math.floor(j/3)].includes(curHengEle)){
        flag = false
      }
      if(Number.isInteger(curHengEle)){
        heng.push(curHengEle)
        kube[Math.floor(i/3) * 3 + Math.floor(j/3)].push(curHengEle)
      }
      if(Number.isInteger(curZongEle)){
        zong.push(curZongEle)
      }
    }
    heng = []
    zong = []
  }
  return flag
};

// isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])
// @lc code=end

