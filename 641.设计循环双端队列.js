/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
class MyCircularDeque {
    constructor(k) {
        this.capacity = k
        this.size = 0
        this.head = null
        this.tail = null
    }
    /**
     * @param {number} value
     * @return {boolean}
     */
    insertFront(value) {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            this.head = this.tail = new LinkedList(value, this.head, this.tail)
        } else {
            let originHead = this.head
            originHead.pre = new LinkedList(value, null, originHead)
            this.head = originHead.pre
        }
        this.size++
        return true
    }
    /**
     * @param {number} value
     * @return {boolean}
     */
    insertLast(value) {
        if (this.isFull()) return false
        if (this.isEmpty()) {
            this.head = this.tail = new LinkedList(value, this.head, this.tail)
        } else {
            let originTail = this.tail
            originTail.next = new LinkedList(value, originTail, null)
            this.tail = originTail.next
        }
        this.size++
        return true
    }
    /**
     * @return {boolean}
     */
    deleteFront() {
        if (this.isEmpty()) return false
        if (this.size === 1) {
            this.head = this.tail = null
        } else {
            let originHead = this.head
            originHead.next.pre = null
            this.head = originHead.next
        }
        this.size--
        return true
    }
    /**
     * @return {boolean}
     */
    deleteLast() {
        if (this.isEmpty()) return false
        if (this.size === 1) {
            this.head = this.tail = null
        } else {
            let originTail = this.tail
            originTail.pre.next = null
            this.tail = originTail.pre
        }
        this.size--
        return true
    }
    /**
     * @return {number}
     */
    getFront() {
        if (this.isEmpty()) return -1
        return this.head.val
    }
    /**
     * @return {number}
     */
    getRear() {
        if (this.isEmpty()) return -1
        return this.tail.val
    }
    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0
    }
    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.capacity
    }
}

class LinkedList {
    constructor(val, pre, next) {
        this.val = val || null
        this.pre = pre || null
        this.next = next || null
    }
}
/**
MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
//  */
var circularDeque = new MyCircularDeque(3); // 设置容量大小为3
console.log(circularDeque.insertLast(1));			        // 返回 true
console.log(circularDeque.insertLast(2));			        // 返回 true
console.log(circularDeque.insertFront(3));			        // 返回 true
console.log(circularDeque.insertFront(4));			        // 已经满了，返回 false
console.log(circularDeque.getRear());  				// 返回 2
console.log(circularDeque.isFull());				        // 返回 true
console.log(circularDeque.deleteLast());			        // 返回 true
console.log(circularDeque.insertFront(4));			        // 返回 true
console.log(circularDeque.getFront());				// 返回 4

// @lc code=end