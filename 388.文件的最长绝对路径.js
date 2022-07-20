/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    if (input.indexOf('.') === -1) return 0
    let arr = input.split('\n')
    let res = 0, preT = -1, ele = ''
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        let tCnt = helper(curr)
        if (tCnt <= preT) {
            if (ele.indexOf('.') !== -1 && ele.length > res) {
                res = ele.length
            }
            ele = ele.split('/').slice(0, tCnt).join('/')
        }
        ele += curr.replace(/[\t]+/g, '/')
        preT = tCnt
    }
    if (ele.indexOf('.') !== -1 && ele.length > res) {
        res = ele.length
    }
    return res
};

const helper = (str) => {
    let cnt = 0
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + 1) !== '\t') {
            break
        }
        cnt++
    }
    return cnt
}
// @lc code=end

var input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
let res = lengthLongestPath(input)
console.log('res :>> ', res);