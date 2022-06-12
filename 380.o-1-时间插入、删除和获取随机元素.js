/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.nums = new Array();
    }
    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (!this.map.has(val)) {
            this.map.set(val, this.nums.length);
            this.nums.push(val);
            return true;
        }
        return false;
    }
    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (this.map.has(val)) {
            const swapVal = this.nums[this.nums.length - 1],
                idx = this.map.get(val);
            this.nums[idx] = swapVal;
            this.map.set(swapVal, idx);
            this.map.delete(val);
            this.nums.pop();
            return true;
        }
        return false;
    }
    /**
     * @return {number}
     */
    getRandom() {
        return this.nums[Math.floor(Math.random() * this.nums.length)];
    }
}




var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_1 = obj.insert(2)
var param_1 = obj.insert(3)
var param_2 = obj.remove(2)
var param_3 = obj.getRandom()


// @lc code=end