/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let min = Infinity
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            res = [[arr[i], arr[i + 1]]]
            min = arr[i + 1] - arr[i]
        } else if (arr[i + 1] - arr[i] === min) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res
};
// @lc code=end

var arr = [3, 8, -10, 23, 19, -4, -14, 27]

let res = minimumAbsDifference(arr)
console.log('res :>> ', res);