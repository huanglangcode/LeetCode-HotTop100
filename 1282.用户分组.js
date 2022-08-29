/*
 * @lc app=leetcode.cn id=1282 lang=javascript
 *
 * [1282] 用户分组
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let hash = {}, res = []
    for (let i = 0; i < groupSizes.length; i++) {
        let curr = groupSizes[i]
        if (hash[curr] && hash[curr].cnt) {
            hash[curr].arr.push(i)
            hash[curr].cnt -= 1
        } else {
            hash[curr] = {
                cnt: curr - 1,
                arr: [i]
            }
        }
        if (hash[curr].cnt === 0) {
            res.push(hash[curr].arr)
        }
    }
    return res
};
// @lc code=end

var groupSizes = [2, 1, 3, 3, 3, 2]
let res = groupThePeople(groupSizes)

console.log('res', res)