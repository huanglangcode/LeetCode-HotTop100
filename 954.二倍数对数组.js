/*
 * @lc app=leetcode.cn id=954 lang=javascript
 *
 * [954] 二倍数对数组
给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。
示例 1：

输入：arr = [3,1,3,6]
输出：false
示例 2：

输入：arr = [2,1,2,6]
输出：false
示例 3：

输入：arr = [4,-2,2,-4]
输出：true
解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
 */

// @lc code=start
/**
 * “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]”
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b))
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1)
    }
    if ((map.get(0) || 0) % 2 !== 0) return false
    map.delete(0)
    for (const key of map.keys()) {
        if ((map.get(2 * key) || 0) < map.get(key)) {
            return false
        }
        map.set(2 * key, map.get(2 * key) - map.get(key))
        if (map.get(2 * key) === 0) {
            map.delete(2 * key)
        }
    }
    return true
};
// @lc code=end

var arr = [4, -2, 2, -4, 4, 8]
let res = canReorderDoubled(arr)
console.log('res', res);