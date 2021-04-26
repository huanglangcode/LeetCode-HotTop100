/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        let tempA = "" + a;
        let tempB = "" + b;
        if (tempA.charAt(0) !== tempB.charAt(0)) {
            return a - b;
        } else {
            return a + b - b + a;
        }
    });
    let res = "";
    while (nums.length) {
        const curr = nums.pop();
        res += curr;
    }
    console.log("res :>> ", res);
    return res;
};
// @lc code=end

largestNumber([3, 30, 34, 5, 9]);