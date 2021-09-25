/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1Arr = version1.split('.').map(_ => +_)
    let v2Arr = version2.split('.').map(_ => +_)
    while (v1Arr.length && v2Arr.length) {
        const ele1 = v1Arr.shift()
        const ele2 = v2Arr.shift()
        if (ele1 === ele2) {
            continue
        } else if (ele1 < ele2) {
            return -1
        } else {
            return 1
        }
    }
    while (v1Arr.length) {
        const ele1 = v1Arr.shift()
        if (ele1 > 0) {
            return 1
        }
    }
    while (v2Arr.length) {
        const ele1 = v2Arr.shift()
        if (ele1 > 0) {
            return -1
        }
    }
    return 0
};
// @lc code=end

compareVersion(version1, version2)