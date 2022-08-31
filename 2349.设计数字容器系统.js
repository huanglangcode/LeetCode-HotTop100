/**
设计一个数字容器系统，可以实现以下功能：
在系统中给定下标处 插入 或者 替换 一个数字。
返回 系统中给定数字的最小下标。
请你实现一个 NumberContainers 类：
NumberContainers() 初始化数字容器系统。
void change(int index, int number) 在下标 index 处填入 number 。如果该下标 index 处已经有数字了，那么用 number 替换该数字。
int find(int number) 返回给定数字 number 在系统中的最小下标。如果系统中没有 number ，那么返回 -1 。
 
示例：
输入：
["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
输出：
[null, -1, null, null, null, null, 1, null, 2]
解释：
NumberContainers nc = new NumberContainers();
nc.find(10);      // 没有数字 10 ，所以返回 -1 。
nc.change(2, 10); // 容器中下标为 2 处填入数字 10 。
nc.change(1, 10); // 容器中下标为 1 处填入数字 10 。
nc.change(3, 10); // 容器中下标为 3 处填入数字 10 。
nc.change(5, 10); // 容器中下标为 5 处填入数字 10 。
nc.find(10);      // 数字 10 所在的下标为 1 ，2 ，3 和 5 。因为最小下标为 1 ，所以返回 1 。
nc.change(1, 20); // 容器中下标为 1 处填入数字 20 。注意，下标 1 处之前为 10 ，现在被替换为 20 。
nc.find(10);      // 数字 10 所在下标为 2 ，3 和 5 。最小下标为 2 ，所以返回 2 。
 
提示：
1 <= index, number <= 109
调用 change 和 find 的 总次数 不超过 105 次。

 */
class PriorQueue {
    constructor(compare = (a, b) => a - b < 0) {
        this.queue = [];
        this.compare = compare
    }

    /**
     * 
     * @param {string} element 
     * @returns 
     */
    push(element) {
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            if (this.compare(this.queue[mid], element)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        this.queue.splice(l, 0, element)
    }

    top() {
        return this.queue[0]
    }

    shift() {
        return this.queue.shift()
    }

    findIndex(element) {
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            if (this.compare(this.queue[mid], element)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return l - 1
    }

    get size() {
        return this.queue.length
    }
}



class NumberContainers {
    constructor() {
        this.map = new Map()
        this.set = new Map()
    }
    /**
     * @param {number} index
     * @param {number} number
     * @return {void}
     */
    change(index, number) {
        if (this.set.has(index)) {
            // 找到对应的number并改掉
            let oldNumber = this.set.get(index)
            let pq = this.map.get(oldNumber)
            let idx = pq.findIndex(index)
            pq.queue.splice(idx, 1)
            if (!pq.queue.length) this.map.delete(oldNumber)
            this.setToMap(number, index)
        } else {
            this.setToMap(number, index);
        }
        this.set.set(index, number)
    }
    setToMap(number, index) {
        if (this.map.has(number)) {
            let pq = this.map.get(number);
            pq.push(index);
            this.map.set(number, pq);
        } else {
            let pq = new PriorQueue((a, b) => a - b > 0);
            pq.push(index);
            this.map.set(number, pq);
        }
    }

    /**
     * @param {number} number
     * @return {number}
     */
    find(number) {
        if (!this.map.has(number)) return -1
        return this.map.get(number).top()
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

var nc = new NumberContainers();
console.log(nc.find(10));      // 没有数字 10 ，所以返回 -1 。
nc.change(2, 10); // 容器中下标为 2 处填入数字 10 。
nc.change(1, 10); // 容器中下标为 1 处填入数字 10 。
nc.change(3, 10); // 容器中下标为 3 处填入数字 10 。
nc.change(5, 10); // 容器中下标为 5 处填入数字 10 。
console.log(nc.find(10));      // 数字 10 所在的下标为 1 ，2 ，3 和 5 。因为最小下标为 1 ，所以返回 1 。
nc.change(1, 20); // 容器中下标为 1 处填入数字 20 。注意，下标 1 处之前为 10 ，现在被替换为 20 。
console.log(nc.find(10));      // 数字 10 所在下标为 2 ，3 和 5 。最小下标为 2 ，所以返回 2 。