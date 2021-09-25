/** Binary Search Tree
 * @param {number} x
 * @return {void}
 */
class Node {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
    /**
     * @param {number} x
     * @return {Node}
     */
    add(x) {
        if (!this) {
            return new Node(x);
        }
        if (x === this.val) {
            return this;
        } else if (x < this.val) {
            this.left = this.left ? this.left.add(x) : new Node(x);
        } else {
            this.right = this.right ? this.right.add(x) : new Node(x);
        }
        return this;
    }
    /**
     * @return {number}
     */
    successor() {
        let node = this.right;
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }
    /**
     * @return {number}
     */
    predecessor() {
        let node = this.left;
        while (node.right) {
            node = node.right;
        }
        return node.val;
    }
    /**
     * @param {number} x
     * @return {Node}
     */
    remove(x) {
        if (!this)
            return null;
        if (x === this.val) {
            if (this.right) {
                this.val = this.successor();
                this.right = this.val ? this.right.remove(this.val) : null;
            } else if (this.left) {
                this.val = this.predecessor();
                this.left = this.val ? this.left.remove(this.val) : null;
            } else {
                return null;
            }
        } else if (x > this.val) {
            this.right = this.right ? this.right.remove(x) : null;
        } else {
            this.left = this.left ? this.left.remove(x) : null;
        }
        return this;
    }
    /**
     * @param {number} x
     * @return {bool}
     */
    contains(x) {
        if (!this || x === this.val) {
            return this !== null;
        }
        if (x < this.val) {
            return this.left !== null && this.left.contains(x);
        }
        return this.right !== null && this.right.contains(x);
    }
}







/**
 * @return {void}
 */
class MyHashSet {
    constructor() {
        this.hashSet = new Array(769).fill(null);
    }
    /** Hash Set
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.hashSet[key % 769]) {
            this.hashSet[key % 769] = new Node(key);
        } else {
            this.hashSet[key % 769].add(key);
        }

    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (!this.hashSet[key % 769])
            return;
        this.hashSet[key % 769] = this.hashSet[key % 769].remove(key);
    }
    /**
     * Returns true if this set contains the specified element
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if (!this.hashSet[key % 769])
            return false;
        return this.hashSet[key % 769].contains(key);
    }
}



