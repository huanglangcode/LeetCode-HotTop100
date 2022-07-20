/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let hash = list1.reduce((acc, curr, idx) => {
        acc[curr] = idx
        return acc
    }, {})
    let res = [], min = 1001
    for (let i = 0; i < list2.length; i++) {
        if (hash[list2[i]] !== undefined) {
            if (hash[list2[i]] + i < min) {
                min = hash[list2[i]] + i
                res = [list2[i]]
            } else if (hash[list2[i]] + i === min) {
                res.push(list2[i])
            }
        }
    }
    return res
};
// @lc code=end

var list1 = ["Shogun", "KFC", "Burger King", "Express"], list2 = ["KFC", "Shogun", "Burger King"]
let r = findRestaurant(list1, list2)
console.log('r :>> ', r);