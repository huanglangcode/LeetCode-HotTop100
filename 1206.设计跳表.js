const MAX_LEVEL = 32
const CONST_P = 0.5

class Skiplist {
    constructor() {
        this.head = new ListNode(-1, MAX_LEVEL)
        this.currLevel = 0
    }
    /**
     * @param {number} target
     * @return {boolean}
     */
    search(target) {
        let curr = this.head
        for (let i = this.currLevel; i >= 0; i--) {
            //找到第i层最大的小于target的元素
            while (!!curr.next[i] && curr.next[i].val < target) {
                curr = curr.next[i]
            }
        }
        return !!curr.next[0] && curr.next[0].val === target
    }
    /**
     * @param {number} num
     * @return {void}
     */
    add(num) {
        let randomLevel = this.randomLevel()
        this.currLevel = Math.max(this.currLevel, randomLevel);
        // 添加规则: 随机出带插入的层级. 然后找到各层的前驱节点. 有序的插入对应层级. 
        let arr = new Array(this.currLevel).fill(this.head)
        let curr = this.head
        // 把已有层级去做到待更新
        for (let i = this.currLevel; i >= 0; i--) { // 从当前最大层开始到第一层.
            while (!!curr.next[i] && curr.next[i].val < num) {
                curr = curr.next[i]
            }
            arr[i] = curr
        }
        let newNode = new ListNode(num, randomLevel)
        for (let i = 0; i < randomLevel; i++) {
            newNode.next[i] = arr[i].next[i]
            arr[i].next[i] = newNode
        }
    }
    /**
     * @param {number} num
     * @return {boolean}
     */
    erase(num) {
        let arr = new Array(this.currLevel)
        let curr = this.head
        for (let i = this.currLevel; i >= 0; i--) {
            //找到第i层最大的小于target的元素
            while (!!curr.next[i] && curr.next[i].val < num) {
                curr = curr.next[i]
            }
            arr[i] = curr
        }
        curr = curr.next[0]
        if (!curr || curr.val !== num) {
            return false
        }
        // 删除第i层和num相等的元素
        for (let i = 0; i < this.currLevel; i++) {
            if (arr[i].next[i] !== curr) {
                break
            }
            arr[i].next[i] = curr.next[i]
        }
        // 如果已经只剩一个元素. 则精简掉层数
        while (this.currLevel > 1 && this.head.next[this.currLevel - 1] === null) {
            this.currLevel--
        }
        return true
    }

    randomLevel() {
        let level = 1
        while (Math.random() < CONST_P && level < MAX_LEVEL) {
            level++
        }
        return level
    }
}

class ListNode {
    constructor(val, maxLevel) {
        this.val = val
        this.next = new Array(maxLevel)
    }
}



/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */

var skiplist = new Skiplist();
for (let i = 0; i < 100; i++) {
    skiplist.add(i);
}
console.log('skiplist :>> ', skiplist);

skiplist.search(5000);