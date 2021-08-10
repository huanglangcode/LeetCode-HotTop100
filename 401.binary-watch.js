/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    if (turnedOn > 8) {
        return [];
    }
    const helper = (char) => {
        let count = 0;
        for (const c of char) {
            if (c === '1') {
                count++;
            }
        }
        return count;
    };
    let res = [];
    for (let i = 0; i < 12; i++) {
        let hourCount = helper(i.toString('2'));
        for (let j = 0; j < 60; j++) {
            let minCount = helper(j.toString('2'));
            if (hourCount + minCount === turnedOn) {
                res.push(`${i}:${j.toString().padStart(2, '0')}`);
            }
        }
    }
    return res;
};
// @lc code=end

readBinaryWatch(3);