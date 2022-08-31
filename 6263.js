/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function (nums1, nums2) {
    let n = nums1.length
    let preSum1 = new Array(n).fill(0)
    let preSum2 = new Array(n).fill(0)
    preSum1[0] = nums1[0]
    preSum2[0] = nums2[0]
    for (let i = 1; i < n; i++) {
        preSum1[i] = preSum1[i - 1] + nums1[i]
        preSum2[i] = preSum2[i - 1] + nums2[i]
    }
    let i = 0, j = 0
    while (i <= j && j < n) {

    }
};

var nums1 = [20, 40, 20, 70, 30], nums2 = [50, 20, 50, 40, 20]

let res = maximumsSplicedArray(nums1, nums2)
console.log('res :>> ', res);