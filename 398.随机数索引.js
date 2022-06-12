/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
class Solution {
    constructor(nums) {
        this.nums = nums;
    }
    pick(target) {
        let ans = 0;
        for (let i = 0, cnt = 0; i < this.nums.length; ++i) {
            if (this.nums[i] == target) {
                ++cnt; // 第 cnt 次遇到 target
                if (Math.floor(Math.random() * cnt) === 0) {
                    ans = i;
                }
            }
        }
        return ans;
    }
}



/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

var nums = [1, 2, 3, 3, 3]

var obj = new Solution(nums)

for (let i = 0; i < 100; i++) {
    let idx = obj.pick(3)
    console.log('idx :>> ', idx);
}