/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.prefixSumArr = new Array(nums.length + 1).fill(0)
        for (let i = 0; i < nums.length; i++) {
            this.prefixSumArr[i + 1] = this.prefixSumArr[i] + nums[i]
        }
    }
    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    update(index, val) {
        let origin = this.prefixSumArr[index + 1] - this.prefixSumArr[index]
        for (let i = index + 1; i < this.prefixSumArr.length; i++) {
            this.prefixSumArr[i] = this.prefixSumArr[i] - origin + val
        }
    }
    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefixSumArr[right + 1] - this.prefixSumArr[left]
    }
}



/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

// ["NumArray", "sumRange", "update", "sumRange"]
// [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
var obj = new NumArray([1, 3, 5])
let res1 = obj.sumRange(0, 2)
console.log('res1', res1);
obj.update(1, 2)
let res2 = obj.sumRange(0, 2)
console.log('res2', res2);