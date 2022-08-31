/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b)
    const preSum = new Array(nums.length)
    preSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        preSum[i] = preSum[i - 1] + nums[i]
    }
    let res = []
    for (const q of queries) {
        let i = 0
        for (; i < preSum.length; i++) {
            if (preSum[i] > q) break
        }
        res.push(i)
    }
    return res
};

var nums = [2, 3, 4, 5], queries = [1]

let res = answerQueries(nums, queries)
console.log('res', res)