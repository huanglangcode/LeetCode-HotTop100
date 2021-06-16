/*
 * @lc app=leetcode id=474 lang=javascript
 * const dp = new Array(strs.length + 1).fill(0).map(ele => ele = new Array(m + 1).fill(0).map(ele => ele = new Array(n + 1).fill(0)));
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    console.time("findMaxForm");
    let max = 0;
    let hash = {};
    const helper = (idx, res, countArr) => {
        max = Math.max(res.length, max);
        if (hash[JSON.stringify(res)]) {
            return;
        }
        hash[JSON.stringify(res)] = true;
        for (let i = idx; i < strs.length; i++) {
            const curr = strs[i];
            const [mCount, nCount] = countMN(curr);
            let nextCountArr = [countArr[0] + mCount, countArr[1] + nCount];
            if (nextCountArr[0] <= m && nextCountArr[1] <= n) {
                let nextArr = res.concat(curr);
                helper(i + 1, nextArr, nextCountArr);
            }
        }
    };
    helper(0, [], [0, 0]);
    console.log('max :>> ', max);
    console.timeEnd("findMaxForm");
    return max;
};

var countMN = (str) => {
    let temp = new Array(2).fill(0);
    for (let i = 0; i < str.length; i++) {
        str[i] === '0' ? temp[0] += 1 : temp[1] += 1;
    }
    return temp;
};
// @lc code=end

// findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);
// findMaxForm(["10", "1", "0"], 1, 1);
findMaxForm(["0", "11", "1000", "01", "0", "101", "1", "1", "1", "0", "0", "0", "0", "1", "0", "0110101", "0", "11", "01", "00", "01111", "0011", "1", "1000", "0", "11101", "1", "0"], 9, 80);