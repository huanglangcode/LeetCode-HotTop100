/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    // return nums.length === 1 ? nums[0] : triangularSum(nums.map((v, idx) => { return (v + nums[idx + 1]) % 10 }).slice(0, nums.length - 1)
    for (let i = 0; i < nums.length; i++) {
        nums[i] += 10
    }
    console.log('nums :>> ', nums);
};

var nums = [1, 2, 3, 4, 5]

let res = triangularSum(nums)
console.log('res :>> ', res);