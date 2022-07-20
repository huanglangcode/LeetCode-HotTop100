/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start

class AllOne {
    constructor() {
        this.map = new Map()
    }
    /**
     * @param {string} key
     * @return {void}
     */
    inc(key) {
        this.map.set(key, this.map.get(key) + 1 || 1)
    }
    /**
     * @param {string} key
     * @return {void}
     */
    dec(key) {
        let cnt = this.map.get(key)
        if (cnt === 1) {
            this.map.delete(key)
        } else {
            this.map.set(key, cnt - 1)
        }
    }
    /**
     * getMaxKey() 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 "" 。
     * @return {string}
     */
    getMaxKey() {
        if (this.map.size) {
            return ""
        }

    }
    /**
     * getMinKey() 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 "" 。
     * @return {string}
     */
    getMinKey() {
        if (this.map.size) {
            return ""
        }
    }
}

// Your AllOne object will be instantiated and called as such:
/**
输入
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
输出
[null, null, null, "hello", "hello", null, "hello", "leet"]
 */
// @lc code=end