// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
// 实现 MovingAverage 类：
// MovingAverage(int size) 用窗口大小 size 初始化对象。
// double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。

// 示例：
// 输入：
// inputs = ["MovingAverage", "next", "next", "next", "next"]
// inputs = [[3], [1], [10], [3], [5]]
// 输出：
// [null, 1.0, 5.5, 4.66667, 6.0]
// 解释：
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // 返回 1.0 = 1 / 1
// movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
// movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
    constructor(size) {
        this.size = size
        this.currSize = 0
        this.last = new Array(size)
        this.sum = 0
    }
    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.currSize++
        let ans = 0
        if (this.currSize <= this.size) {
            this.sum += val
            ans = this.sum / this.currSize
        } else {
            this.sum += (val - this.last[(this.currSize - 1) % this.size])
            ans = this.sum / this.size
        }
        this.last[(this.currSize - 1) % this.size] = val
        return ans
    }
}


/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var obj = new MovingAverage(3)
console.log(obj.next(1)); // 返回 1.0 = 1 / 1
console.log(obj.next(10)); // 返回 5.5 = (1 + 10) / 2
console.log(obj.next(3)); // 返回 4.66667 = (1 + 10 + 3) / 3
console.log(obj.next(5));