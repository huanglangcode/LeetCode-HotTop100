/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    nums.sort((a, b) => a - b)
    let res = 0, idx = 0
    const helper = (arr) => {
        if (!arr.some(ele => ele !== 0)) return
        while (arr[idx] === 0) {
            idx++
        }
        let curr = arr[idx]
        for (let i = idx; i < arr.length; i++) {
            arr[i] -= curr
        }
        res++
        helper(arr)
    }
    helper(nums)
    return res
};


var nums = [1, 5, 0, 3, 5]
let res = minimumOperations([1, 5, 0, 3, 5])
console.log('res', res)