/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    if (!nums.length) {
        return 0
    }
    let i = 0
    let j = 1
    let res = 0
    let preMax = 0
    let preMin = 0
    while (i < nums.length && j <= nums.length && i < j) {
        let temp = nums.slice(i, j)
        if (preMax || preMin) {
            let currVal = temp[temp.length - 1]
            console.log('res 4444', temp, currVal, i, j)
            if (currVal > preMax) {
                if (currVal - preMin > limit) {
                    i++
                    preMax = 0
                    preMin = 0
                    j = i + 1
                } else {
                    res = Math.max(temp.length, res)
                    console.log('res 333', res, temp)
                    j++
                    preMax = currVal
                }
            } else if (currVal < preMin) {
                if (preMax - currVal > limit) {
                    i++
                    preMax = 0
                    preMin = 0
                    j = i + 1
                } else {
                    res = Math.max(temp.length, res)
                    console.log('res 222', res, temp)
                    j++
                    preMin = currVal
                }
            } else {
                res = Math.max(temp.length, res)
                j++
            }
        } else {
            let [result, max, min] = helper(temp, limit)
            if (result) {
                res = Math.max(temp.length, res)
                console.log('res 111', res, temp, i, j)
                j++
                preMax = max
                preMin = min
            } else {
                i++
                preMax = 0
                preMin = 0
                j = i + 1
            }
        }
    }
    console.log('res', res)
    return res
}

var helper = function (nums, limit) {
    let max = nums[0]
    let min = nums[0]
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
    }
    return [max - min <= limit, max, min]
}
// @lc code=end


longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1], 0)
