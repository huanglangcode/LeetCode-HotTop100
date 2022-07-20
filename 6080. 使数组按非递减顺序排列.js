/**
[ 7, 14, 4, 14, 13, 2, 6, 13]
[ 7, 14, 14, 6, 13 ]
[ 7, 14, 14, 13 ]
[ 7, 14, 14 ]
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
    let stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
        let cnt = 0
        while (stack.length && stack[stack.length - 1][0] < nums[i]) {
            cnt = Math.max(cnt + 1, stack.pop()[1])
        }
        stack.push([nums[i], cnt])
    }
    return Math.max(...stack.map(ele => ele[1]))
};

var nums = [7, 14, 4, 14, 13, 2, 6, 13]

nums = [10, 1, 2, 7, 1, 2, 6, 1, 2, 3, 20]

let res = totalSteps(nums)
console.log('res :>> ', res);