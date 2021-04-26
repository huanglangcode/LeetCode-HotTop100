/*
 * @lc app=leetcode id=781 lang=javascript
 *
 * [781] Rabbits in Forest
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let hash = {};
    for (const ele of answers) {
        !!hash[ele] ? hash[ele] += 1 : hash[ele] = 1;
    }
    let res = 0;
    console.log("hash :>> ", hash);
    for (const entry of Object.entries(hash)) {
        if (entry[1] < +entry[0] + 1) {
            res += +entry[0] + 1;
        } else {
            res += Math.ceil(entry[1] / (+entry[0] + 1)) * (+entry[0] + 1);
        }
    }
    console.log("res :>> ", res);
    return res;
};

numRabbits([2, 2, 2, 2, 2, 5]);
// @lc code=end

