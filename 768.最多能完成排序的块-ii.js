/*
 * @lc app=leetcode.cn id=768 lang=javascript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 * 最简单好理解的做法 
 * 对于第i个数 当且仅当i和它前面所有数的最大值 
 * 小于 
 * i后面所有数的最小值时 可以把i和它前面的数分出去 结果 + 1 复杂度O(n)
 */
var maxChunksToSorted = function (arr) {
    let n = arr.length, maxArr = new Array(n), minArr = new Array(n)
    maxArr[0] = arr[0]
    minArr[n - 1] = arr[n - 1]
    for (let i = 1; i < n; i++) {
        maxArr[i] = Math.max(arr[i], maxArr[i - 1])
        minArr[n - 1 - i] = Math.min(arr[n - i], minArr[n - i])
    }
    console.log('maxArr', maxArr)
    console.log('minArr', minArr)
    let ans = 1
    for (let i = 0; i < n - 1; i++) {
        if (maxArr[i] <= minArr[i]) ans++
    }
    return ans
};
// @lc code=end

// [2, 1, 5, 2, 3, 4, 7, 8, 9, 9, 8, 7, 10] 5

var arr = [2, 1, 5, 2, 3, 4, 7, 8, 9, 9, 8, 7, 10]

let res = maxChunksToSorted(arr)
console.log('res', res)