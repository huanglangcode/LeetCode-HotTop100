/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let needed = 0
    let i = 0, j = people.length - 1
    while (i <= j) {
        if (people[i] + people[j] <= limit) { i++ }
        j--
        needed++
    }
    return needed
};
// @lc code=end

// numRescueBoats([6, 5, 1, 4, 3, 3, 2], 6)
// numRescueBoats([1, 2], 3)
// numRescueBoats([3, 2, 2, 1], 3)
// numRescueBoats([3, 5, 3, 4], 5)