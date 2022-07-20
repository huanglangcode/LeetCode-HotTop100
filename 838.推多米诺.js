/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const s1 = dominoes.split("")
    const s2 = dominoes.split("")
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'R' && s1[i + 1] === '.') {
            s1[i + 1] = 'R'
        }
    }
    for (let i = s2.length - 1; i >= 0; i--) {
        if (s2[i] === 'L' && s2[i - 1] === '.') {
            s2[i - 1] = 'L'
        }
    }
    console.log(s1.join(""))
    console.log(s2.join(""))
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (s1[i] === '.' && s2[i] === 'L') {
                s1[i] = 'L'
            }
            if (s1[i] === 'R' && s2[i] === 'L') {
                let end = i
                while (s1[end + 1] === 'R' && s2[end + 1] === 'L') {
                    end += 1
                }
                console.log(i, end)
                let mid = (i + end) / 2
                console.log('mid', mid)
                if (Math.floor(mid) === mid) {
                    s1[mid] = '.'
                    while (mid++ <= end) {
                        s1[mid] = 'L'
                    }
                } else {
                    mid = Math.floor(mid)
                    while (++mid <= end) {
                        s1[mid] = 'L'
                    }
                }
                i = end
            }
        }
    }
    return s1.join("")
};
// @lc code=end

var dominoes = ".L.R...LR..L.."
let res = pushDominoes(dominoes)
console.log("res === ", res === "LL.RR.LLRRLL..")