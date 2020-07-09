/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
// @lc code=start
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {
// };
class CQueue {
  constructor() {
    this.A = []
    this.B = []
  }
  /**
   * @param {number} value
   * @return {void}
   */
  appendTail(value) {
    this.A.push(value)
  }
  /**
   * @return {number}
   */
  deleteHead() {
    if (this.B.length !== 0) {
      return this.B.pop()
    }
    if (this.A.length === 0) {
      return -1
    }
    while (this.A.length !== 0) {
      this.B.push(this.A.pop())
    }
    return this.B.pop()
  }
}
let cq = new CQueue()
console.log('cq :>> ', cq, cq.A, cq.B)
cq.appendTail(1)
var b = cq.deleteHead()
console.log('b :>> ', b)

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// @lc code=end

