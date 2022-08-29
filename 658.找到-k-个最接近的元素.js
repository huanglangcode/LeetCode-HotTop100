/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
整数 a 比整数 b 更接近 x 需要满足：
|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
 
示例 1：
输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]

示例 2：
输入：arr = [1,2,3,4,5], k = 4, x = -1
输出：[1,2,3,4]

提示：
1 <= k <= arr.length
1 <= arr.length <= 104
arr 按 升序 排列
-104 <= arr[i], x <= 104
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0, right = arr.length - 1
    while (left < right) {
        const mid = left + ((right - left) >> 1)
        if (arr[mid] === x) {
            left = mid
            break
        } else if (arr[mid] < x) {
            left = mid + 1
        } else if (arr[mid] > x) {
            right = mid
        }
    }
    let l = left, r = left
    while (k-- > 0) {
        if (l <= 0) {
            r++
        } else if (r >= arr.length - 1) {
            l--
        } else {
            if (x - arr[l] <= arr[r] - x) {
                l--
            } else {
                r++
            }
        }
    }
    return arr.slice(l, r)
};
// @lc code=end

var arr = [1, 1, 1, 10, 10, 10], k = 1, x = 9

let res = findClosestElements(arr, k, x)
console.log('res', res)
