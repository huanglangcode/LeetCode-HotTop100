class PQ {
    constructor() {
        this.queue = []
    }

    offer(element) {
        if (!this.queue.length || element < this.queue[0]) {
            this.queue.unshift(element)
            return
        }
        if (element > this.queue[this.queue.length - 1]) {
            this.queue.push(element);
            return;
        }
        let l = 0,
            r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid] <= element) {
                l = mid + 1
            } else if (this.queue[mid] > element) {
                r = mid - 1
            }
        }
        this.queue.splice(l, 0, element)
    }

    poll() {
        return this.queue.shift()
    }

    get length() {
        return this.queue.length
    }
}
const MOD = 1e9 + 7
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function (nums, k) {
    nums.sort((a, b) => a - b)
    let pq = new PQ()
    pq.queue = nums
    while (k--) {
        let curr = pq.poll()
        pq.offer(curr + 1)
    }
    return pq.queue.reduce((acc, curr) => {
        acc *= curr
        return acc % MOD
    }, 1) % MOD
};

var nums = [6, 3, 3, 2, 7, 9, 8, 12, 15, 4],
    k = 15
let res = maximumProduct(nums, k)
console.log('res === 120210553', res === 120210553);