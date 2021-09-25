/*
 * @lc app=leetcode.cn id=212 lang=javascript
给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
同一个单元格内的字母在一个单词中不允许被重复使用。
输入：board=[
    ["o","a","a","n"],
    ["e","t","a","e"],
    ["i","h","k","r"],
    ["i","f","l","v"]
] 
words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
    m == board.length
    n == board[i].length
    1 <= m, n <= 12
    board[i][j] 是一个小写英文字母
    1 <= words.length <= 3 * 104
    1 <= words[i].length <= 10
    words[i] 由小写英文字母组成
    words 中的所有字符串互不相同
 * [212] 单词搜索 II
 */
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let visited = [...Array(13)].map(_ => [...Array(13).fill(false)])
    let maxLength = 0
    for (const word of words) {
        maxLength = Math.max(maxLength, word.length)
    }
    const backtracking = (node, i, j, visited, length) => {
        if (length > maxLength) {
            return
        }
        const char = board[i][j]
        if (!node[char]) {
            node[char] = {}
        }
        node = node[char]
        for (const [x, y] of direction) {
            let nextI = i + x
            let nextJ = j + y
            if (nextI < 0 || nextI >= board.length || nextJ < 0 || nextJ >= board[0].length) {
                continue
            }
            if (visited[nextI][nextJ]) continue;
            visited[nextI][nextJ] = true
            backtracking(node, i + x, j + y, visited, length + 1)
            visited[nextI][nextJ] = false
        }
    }
    let trie = {}
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            visited[i][j] = true
            backtracking(trie, i, j, visited, 1)
            visited[i][j] = false
        }
    }
    let res = []
    for (const word of words) {
        let node = trie
        let flag = true
        for (const char of word) {
            if (!node[char]) {
                flag = false
                break
            }
            node = node[char]
        }
        if (flag) {
            res.push(word)
        }
    }
};
// @lc code=end

findWords([
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]],
    ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"])

findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
    ["oath", "pea", "eat", "rain"])