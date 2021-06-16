/*
 * @lc app=leetcode id=1190 lang=javascript
 *
 * [1190] Reverse Substrings Between Each Pair of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(str);
            str = "";
        } else if (s[i] === ")") {
            let curr = stack.pop();
            str = curr + str.split("").reverse().join("");
        } else {
            str += s[i];
        }
    }
    return str;
};

reverseParentheses("(ed(et(oc))el)");
// @lc code=end

