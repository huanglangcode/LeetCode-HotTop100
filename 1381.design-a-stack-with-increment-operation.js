/*
 * @lc app=leetcode id=1381 lang=javascript
 *
 * [1381] Design a Stack With Increment Operation
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }
    /**
     * @return {number}
     */
    pop() {
        if (this.stack.length) {
            return this.stack.pop();
        } else {
            return -1;
        }
    }
    /**
     * @param {number} k                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
     * @param {number} val
     * @return {void}
     */
    increment(k, val) {
        for (let i = 0; i < k && i < this.stack.length; i++) {
            this.stack[i] += val;
        }
    }
}


// ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
// [    [3],       [1],    [2],   [],   [2],   [3],  [4],    [5,100],    [2,100],    [],   [],   [],   []]
// [    null,      null,   null,  2,   null,   null, null,    null,       null,     103,  202,  201,   -1]

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

