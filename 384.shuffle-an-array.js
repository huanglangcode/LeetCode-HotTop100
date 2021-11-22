/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */
// @lc code=start
/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.nums = nums
  }
  /**
   * @return {number[]}
   */
  reset() {
    return this.nums
  }
  /**
   * @return {number[]}
   */
  shuffle() {
    let res = [...this.nums]
    const swap = (i, j) => {
      [res[i], res[j]] = [res[j], res[i]]
    }
    for (let i = 0; i < res.length; i++) {
      swap(i, Math.floor(Math.random() * res.length))
    }
    return res
  }
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

