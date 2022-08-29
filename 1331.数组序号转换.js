/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let map = new Map()
    let newArr = arr.slice().sort((a, b) => a - b)
    let sort = 0
    for (const num of newArr) {
        if (!map.has(num)) map.set(num, ++sort)
    }
    return arr.map((ele) => map.get(ele))
};
// @lc code=end

var arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]

let res = arrayRankTransform(arr)
console.log('res :>> ', res);