/*
 * @lc app=leetcode.cn id=2038 lang=javascript
 *
 * [2038] 如果相邻两个颜色均相同则删除当前颜色
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    let cnt = 0
    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') {
            cnt++
        }
        if (colors[i] === 'B' && colors[i - 1] === 'B' && colors[i + 1] === 'B') {
            cnt--
        }
    }
    return cnt > 0
};
// @lc code=end

var colors = "ABBBBBBBAAA"
let res = winnerOfGame(colors)
console.log('res', res);