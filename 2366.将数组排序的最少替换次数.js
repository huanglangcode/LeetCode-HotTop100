/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function (nums) {
    let cnt = 0, min = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] <= min) {
            min = nums[i]
            continue
        }
        if (nums[i] % min === 0) {
            // min不变 
            cnt += (nums[i] / min) - 1
        } else {
            let minNeed = Math.ceil(nums[i] / min)
            cnt += minNeed - 1
            min = Math.floor(nums[i] / minNeed)
        }
    }
    return cnt
};


var nums = [3, 9, 3]

let res = minimumReplacement(nums)
console.log('res === 27', res, res === 27)