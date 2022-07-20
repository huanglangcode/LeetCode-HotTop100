/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let hash = {}, max = 0
    for (const h of heights) {
        hash[h] = hash[h] + 1 || 1
        max = Math.max(max, h)
    }
    let j = 0, cnt = 0
    for (let i = 1; i <= max; i++) {
        if (hash[i]) {
            let end = j + hash[i]
            for (; j < end; j++) {
                if (heights[j] !== i) {
                    cnt++
                }
            }
        }
    }
    return cnt
};
// @lc code=end

var heights = [1, 1, 4, 2, 1, 3]

let res = heightChecker(heights)
console.log('res :>> ', res);