/*
 * @lc app=leetcode.cn id=622 lang=javascript
 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。
 但是使用循环队列，我们能使用这些空间去存储新的值。
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
 class ListNode {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}
class MyCircularQueue {
    constructor(k) {
        this.maxSize = k
        this.size = 0
        this.head = null
        this.tail = null
    }
    enQueue(val) {
        if (this.isFull()) return false
        let newNode = new ListNode(val)
        if (this.isEmpty()) this.head = this.tail = newNode
        else this.tail.next = newNode, this.tail = this.tail.next
        this.size++
        return true
    }
    deQueue() {
        if (this.isEmpty()) return false
        this.head = this.head.next
        this.size--
        return true
    }
    Front() {
        return this.isEmpty() ? -1 : this.head.val
    }
    Rear() {
        return this.isEmpty() ? -1 : this.tail.val
    }
    isEmpty() {
        return (this.size === 0)
    }
    isFull() {
        return (this.size === this.maxSize)
    };
};


["MyCircularQueue",
    "enQueue",
    "Rear",
    "Front",
    "deQueue",
    "Front",
    "deQueue",
    "Front",
    "enQueue",
    "enQueue",
    "enQueue",
    "enQueue"]
[[3], [2], [], [], [], [], [], [], [4], [2], [2], [3]]


var cq = new MyCircularQueue(3); // 设置长度为 3
cq.enQueue(2)
cq.Rear()
cq.Front()
cq.deQueue()
cq.Front()
cq.deQueue()
cq.Front()
cq.enQueue(4)
cq.enQueue(2)
cq.enQueue(2)
cq.enQueue(3)

// @lc code=end

