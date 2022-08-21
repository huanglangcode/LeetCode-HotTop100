/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = []

    const helper = (arr, str) => {
        if (arr.length === 3) {
            if (isValid(str)) result.push([...arr, str]);
            return;
        }

        for (let i = 1; i < 4; i++) {
            let subStr = str.slice(0, i);
            if (!isValid(subStr)) continue;
            helper([...arr, subStr], str.slice(i));
        }
    }

    function isValid(str) {
        if (+str > 255 || !str.length) return false;
        if (str.length > 1 && str.startsWith('0')) return false;
        return true;
    }

    helper([], s);
    return result.map(x => x.join('.'))
};

var checker = (str) => {
    if (str.startsWith("0") && str.length > 1) {
        return false
    }
    if (+str > 255) {
        return false
    }
    return true
}
// @lc code=end
let r = restoreIpAddresses("101023")
console.log('r :>> ', r);
