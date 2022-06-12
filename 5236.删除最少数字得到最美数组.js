/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if ((i - res) % 2 === 0 && nums[i] === nums[i + 1]) {
            res++
        }
    }
    return (nums.length - res) % 2 === 0 ? res : res + 1
};

var nums = [1, 1, 2, 2, 2, 3, 3, 3]
let res = minDeletion(nums)
console.log(res, 'res');