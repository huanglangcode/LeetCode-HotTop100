/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let m = mat.length;
    let pq = new IdxPriorQueue();
    for (let i = 0; i < m; i++) {
        const count = countI(mat[i]);
        pq.push(i, count);
    }
    let ans = new Array(k);
    for (let i = 0; i < k; i++) {
        ans[i] = pq.queue[i][0];
    }
    console.log('ans :>> ', ans);
    return ans;
};

class IdxPriorQueue {
    constructor() {
        this.queue = [];
    }
    push(idx, val) {
        if (!this.queue.length) {
            this.queue.push([idx, val]);
            return;
        }
        if (val < this.queue[0][1]) {
            this.queue.unshift([idx, val]);
            return;
        }
        if (val >= this.queue[this.queue.length - 1][1]) {
            this.queue.push([idx, val]);
            return;
        }
        for (let i = 0; i <= this.queue.length - 2; i++) {
            if (this.queue[i][1] <= val && val < this.queue[i + 1][1]) {
                this.queue.splice(i + 1, 0, [idx, val]); // 插入
                return;
            }
        }
    }
}
// @lc code=end
const countI = (arr) => {
    let l = 0;
    let r = arr.length;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (arr[mid] === 0) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

kWeakestRows([[1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 0, 0]],
    2);