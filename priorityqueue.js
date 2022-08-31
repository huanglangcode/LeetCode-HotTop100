class PriorityQueue {
    constructor(
        compare = (a, b) => a[0] - b[0] < 0
    ) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) { return null }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size
                && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}


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

    get size() {
        return this.queue.length
    }
}

const p = new PriorQueue()

p.push(1)
p.push(10)
p.push(100)
p.push(30)
p.push(50)
console.log('p :>> ', p);