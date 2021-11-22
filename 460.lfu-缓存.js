/*
 * @lc app=leetcode.cn id=460 lang=javascript
请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

实现 LFUCache 类：

LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
int get(int key) - 如果键存在于缓存中，则获取键的值，否则返回 -1。
void put(int key, int value) - 
    如果键已存在，则变更其值；如果键不存在，请插入键值对。
    当缓存达到其容量时，则应该在插入新项之前，使最不经常使用的项无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
    注意「项的使用次数」就是自插入该项以来对其调用 get 和 put 函数的次数之和。使用次数会在对应项被移除后置为 0 。
    为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。
对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

输入：
    ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
输出：
    [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

解释：
    // cnt(x) = 键 x 的使用计数
    // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
    LFUCache lFUCache = new LFUCache(2);
    lFUCache.put(1, 1);   // cache=[1,_], cnt(1)=1
    lFUCache.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
    lFUCache.get(1);      // 返回 1
                        // cache=[1,2], cnt(2)=1, cnt(1)=2
    lFUCache.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
                        // cache=[3,1], cnt(3)=1, cnt(1)=2
    lFUCache.get(2);      // 返回 -1（未找到）
    lFUCache.get(3);      // 返回 3
                        // cache=[3,1], cnt(3)=2, cnt(1)=2
    lFUCache.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
                        // cache=[4,3], cnt(4)=1, cnt(3)=2
    lFUCache.get(1);      // 返回 -1（未找到）
    lFUCache.get(3);      // 返回 3
                        // cache=[3,4], cnt(4)=1, cnt(3)=3
    lFUCache.get(4);      // 返回 4
                        // cache=[3,4], cnt(4)=2, cnt(3)=3
提示：
    0 <= capacity, key, value <= 10000
    最多调用 100000 次 get 和 put 方法
    进阶：你可以为这两种操作设计时间复杂度为 O(1) 的实现吗？

 * [460] LFU 缓存
 */
// @lc code=start
/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    removeTail() {
        let node = this.tail.prev;
        this.removeNode(node);
        return node.key;
    }

    isEmpty() {
        return this.head.next.val == null;
    }
}

/**
 * @param {number} capacity
 */
class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.currentSize = 0;
        this.leastFreq = 0;
        this.nodeHash = new Map();
        this.freqHash = new Map();
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.nodeHash.get(key);
        if (!node)
            return -1;
        this.freqHash.get(node.freq).removeNode(node);
        if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty())
            this.leastFreq++;
        node.freq++;
        // freqHash housekeeping
        if (this.freqHash.get(node.freq) == null)
            this.freqHash.set(node.freq, new DoublyLinkedList());
        this.freqHash.get(node.freq).insertHead(node);
        return node.val;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.capacity == 0)
            return;
        let node = this.nodeHash.get(key);
        if (!node) { // new node
            if (this.currentSize === this.capacity) {
                let tailKey = this.freqHash.get(this.leastFreq).removeTail();
                this.nodeHash.delete(tailKey);
            }
            this.currentSize++;
            let newNode = new Node(key, value);
            // freqHash housekeeping
            if (this.freqHash.get(1) == null)
                this.freqHash.set(1, new DoublyLinkedList());
            this.freqHash.get(1).insertHead(newNode);

            this.nodeHash.set(key, newNode);
            this.leastFreq = 1;

        } else { // existed node
            node.val = value;
            this.freqHash.get(node.freq).removeNode(node);
            if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty())
                this.leastFreq++;
            node.freq++;
            // freqHash housekeeping
            if (this.freqHash.get(node.freq) == null)
                this.freqHash.set(node.freq, new DoublyLinkedList());
            this.freqHash.get(node.freq).insertHead(node);
        }
    }
}


// @lc code=end
var lfu = new LFUCache(2)
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
console.log(lfu.get(1));      // 返回 1
// cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
// cache=[3,1], cnt(3)=1, cnt(1)=2
console.log(lfu.get(2));      // 返回 -1（未找到）
console.log(lfu.get(3));      // 返回 3
// cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
// cache=[4,3], cnt(4)=1, cnt(3)=2
console.log(lfu.get(1));      // 返回 -1（未找到）
console.log(lfu.get(3));      // 返回 3
// cache=[3,4], cnt(4)=1, cnt(3)=3
console.log(lfu.get(4));      // 返回 4



var countObj = {
    1: {
        cnt: 1,
        value: 1
    },
    2: {
        cnt: 1,
        value: 2
    }

}

function ListNode(val) {
    this.val = val;
    this.next = null;
}