/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = new Array(nums.length - k + 1)
    let pq = []

    for (let j = 0; j < nums.length; j++) {
        const curr = nums[j]
        while (pq.length && nums[pq[pq.length - 1]] < curr) {
            pq.pop()
        }
        pq.push(j)
        const i = j - k + 1
        // 当队首元素的下标 [0,2] 小于滑动窗口左侧边界left时
        // 表示队首元素已经不再滑动窗口内，因此将其从队首移除
        if (pq[0] < i) { 
            pq.shift()
        }
        if (i >= 0) {
            res[i] = nums[pq[0]]
        }
    }
    return res
};
// @lc code=end

let res = maxSlidingWindow([9, 7, 8, 6, 4, 5, 3, 1, 2], 3)
console.log('res :>> ', res);
// [9,8,8,6,5,5,3]