/*
 * @lc app=leetcode.cn id=519 lang=javascript
 *
 * [519] 随机翻转矩阵
 
给你一个 m x n 的二元矩阵 matrix ，且所有值被初始化为 0 。请你设计一个算法，随机选取一个满足 matrix[i][j] == 0 的下标 (i, j) ，并将它的值变为 1 。所有满足 matrix[i][j] == 0 的下标 (i, j) 被选取的概率应当均等。
尽量最少调用内置的随机函数，并且优化时间和空间复杂度。

实现 Solution 类：
Solution(int m, int n) 使用二元矩阵的大小 m 和 n 初始化该对象
int[] flip() 返回一个满足 matrix[i][j] == 0 的随机下标 [i, j] ，并将其对应格子中的值变为 1
void reset() 将矩阵中所有的值重置为 0


 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 */
class Solution {
    constructor(m, n) {
        this.m = m
        this.n = n
        this.total = m * n
        this.map = new Map()
    }
    /**
     * @return {number[]}
     */
    flip() {
        let refIdx = Math.floor(Math.random() * this.total)
        // 0 1 2
        // 随机到1   下一轮0 1(2)
        // 0 1
        // 随机到0   下一轮0 本来应该取当前最大total. 但是total已经在map内 优先取map.get(this.total)
        let x = this.map.get(refIdx) || refIdx
        this.total--
        this.map.set(refIdx, this.map.get(this.total) || this.total)
        return [x % this.m, Math.floor(x / this.m)]
    }
    /**
     * @return {void}
     */
    reset() {
        this.map = new Map()
        this.total = this.m * this.n
    }
}



/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end

var obj = new Solution(3, 1)
var param_1 = obj.flip()
console.log('param_1 :>> ', param_1);
var param_2 = obj.flip()
console.log('param_2 :>> ', param_2);
var param_3 = obj.flip()
console.log('param_3 :>> ', param_3);