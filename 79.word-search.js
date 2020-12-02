/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
示例:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
 */
var exist = function (board, word) {
  let result = false
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result = helper(i, j, word, board, '', [])
      if (result) {
        console.log('binggo :>> ');
        return result
      }
    }
  }
  console.log('result :>> ', result);
  return false
};

var helper = function (i, j, word, board, curr, path) {
  console.log('curr :>> ', i, j, curr, path);
  if (board[i] && board[i][j]) {
    curr += board[i][j]
  }
  console.log('after curr :>> ', curr);
  if (curr[curr.length - 1] !== word[curr.length - 1] || path.indexOf(i * board[0].length + (j + 1)) !== -1 || !board[i] || !board[i][j]) {
    console.log('false :>> ', false);
    return false
  }
  if (curr === word) {
    return true
  }
  path.push(i * board[0].length + (j + 1))
  return helper(i, j + 1, word, board, curr, path) ||
    helper(i + 1, j, word, board, curr, path) ||
    helper(i, j - 1, word, board, curr, path) ||
    helper(i - 1, j, word, board, curr, path)
}
// @lc code=end

exist([
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"]],
  "ABCEFSADEESE")
