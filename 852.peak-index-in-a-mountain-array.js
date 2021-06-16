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
        const mid = Math.floor(start - (start - end) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) { // 上山
            start = mid + 1;
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) { // 下山
            end = mid;
        }
    }
};
// @lc code=end

