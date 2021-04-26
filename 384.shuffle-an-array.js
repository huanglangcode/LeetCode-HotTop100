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
    this.origin = nums
  }
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    return this.origin
  }
  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    const shuffled = this.origin.slice()
    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    for (let i = 0; i < shuffled.length; i++) {
      swap(shuffled, i, Math.floor(Math.random() * shuffled.length))
    }
    return shuffled;
  }
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

