/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let start = 1;
    let end = arr.length - 2;
    while (start <= end) {
        let mid = (start + end) >> 1
        let left = arr[mid - 1]
        let right = arr[mid + 1]
        if (arr[mid] > left && arr[mid] > right) {
            return mid
        } else if (left <= arr[mid] && arr[mid] <= right) {
            // 往上
            start = mid + 1
        } else if (left >= arr[mid] && arr[mid] >= right) {
            // 往下
            end = mid - 1
        }
    }
};
// @lc code=end

let res = peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
console.log('res :>> ', res);