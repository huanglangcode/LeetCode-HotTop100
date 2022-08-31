/**
 * @param {number[]} nums
 * @return {number}
 */
const MOD = 1e9 + 7
var numberOfPairs = function (nums) {
    let res = 0, hash = {}
    for (const num of nums) {
        const z = parseInt(num.toString().split("").reverse().join(""))
        //原号码 A- 镜像号码 A = 原号码 B - 镜像号码 B
        const need = num - +z
        if (hash[need]) res = (res + hash[need]) % MOD
        hash[need] = hash[need] + 1 || 1
    }
    return res
};

// 并将结果对10^9+7取余。

var nums = [100, 17, 28, 39, 71, 1700, 100, 100, 100]

numberOfPairs(nums)