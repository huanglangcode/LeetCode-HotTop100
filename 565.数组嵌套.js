/*
 * @lc app=leetcode.cn id=565 lang=javascript
 *
 * [565] 数组嵌套
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let set = new Set(), ans = 0
    const helper = (idx, innerSet) => {
        if (innerSet.has(idx)) return innerSet.size
        innerSet.add(idx)
        set.add(idx)
        const val = nums[idx]
        nums[idx] = -1
        let size = helper(val, innerSet)
        return size
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === -1) continue
        if (ans > nums.length - set.size) break
        let size = helper(i, new Set())
        ans = Math.max(ans, size)
    }
    return ans
};
// @lc code=end



var nums = [5, 4, 0, 3, 1, 6, 2]
let res = arrayNesting(nums)
