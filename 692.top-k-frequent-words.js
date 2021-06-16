/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let hash = words.reduce((acc, curr) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, {});
    let res = [];
    Object.entries(hash).sort((a, b) => {
        return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
    }).forEach((ele, idx) => {
        if (idx < k) { res.push(ele[0]); }
    });
    return res;
};

topKFrequent(["aaaa", "aaa", "aaa", "aa", "a"],
    3);
// @lc code=end

