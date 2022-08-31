/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxCI = function (nums) {
    let max = 1, res = max
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            max++
            res = Math.max(max, res)
        } else {
            max = 1
        }
    }
    return res
};


var nums = [54, 42, 62, 75, 82, 86, 86]

let res = findMaxCI(nums)
console.log('res :>> ', res);