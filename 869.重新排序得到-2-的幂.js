/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
        1 <= N <= 10^9

 */
const res = {
    '1': [1, 2, 4, 8], '2': [16, 32, 64], '3': [128, 256, 512], '4': [1024, 2048, 4096, 8192], '5': [16384, 32768, 65536],
    '6': [131072, 262144, 524288], '7': [1048576, 2097152, 4194304, 8388608], '8': [16777216, 33554432, 67108864],
    '9': [134217728, 268435456, 536870912], '10': [1073741824, 2147483648, 4294967296, 8589934592]
}
// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
    const nStr = n.toString()
    let arr = Array(10).fill(0)
    for (const c of nStr) {
        arr[c]++
    }
    for (const numToMatch of res[nStr.length]) {
        let a = [...arr]
        for (const c of numToMatch.toString()) {
            a[c]--
        }
        if (+a.join("") === 0) {
            return true
        }
    }
    return false
};
// @lc code=end

let q = reorderedPowerOf2(77766211)
console.log('q :>> ', q);