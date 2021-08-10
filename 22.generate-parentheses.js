/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const parentheses = ['(', ')'];
    let res = [];
    let needed = n << 1;
    const helper = (subStr) => {
        if (subStr.length === needed) {
            res.push(subStr);
            return;
        }
        for (let i = 0; i < parentheses.length; i++) {
            subStr += parentheses[i];
            if (checked(subStr, n)) {
                helper(subStr);
            }
            subStr = subStr.substring(0, subStr.length - 1);
        }
    };
    helper('');
    return res;
};

const checked = (str, n) => {
    let left = 0;
    let right = 0;
    while (str.length) {
        let curr = str[0];
        if (curr === '(') {
            left++;
        } else {
            right++;
        }
        if (right > left) {
            return false;
        }
        if (left > n || right > n) {
            return false;
        }
        str = str.slice(1);
    }
    return true;
};
// @lc code=end