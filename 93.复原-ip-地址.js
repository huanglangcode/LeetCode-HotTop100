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
    if (s.length < 4) { return [] }
    let res = []
    for (let i = 1; i < s.length - 2; i++) {
        let x = s.slice(0, i)
        if (!checker(x)) {
            continue
        }
        for (let j = i + 1; j < s.length - 1; j++) {
            let y = s.slice(i, j)
            if (!checker(y)) {
                continue
            }
            for (let k = j + 1; k < s.length; k++) {
                let z = s.slice(j, k)
                let l = s.slice(k)
                if (!checker(z) || !checker(l)) {
                    continue
                }
                res.push(`${x}.${y}.${z}.${l}`)
            }
        }
    }
    return res
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
restoreIpAddresses("101023")
