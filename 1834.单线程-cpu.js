/*
 * @lc app=leetcode.cn id=1834 lang=javascript
 * [1834] 单线程 CPU
给你一个二维数组 tasks ，用于表示 n​​​​​​ 项从 0 到 n - 1 编号的任务。
其中 tasks[i] = [enqueueTimei, processingTimei] 意味着第 i​​​​​​​​​​ 项任务将会于 enqueueTimei 时进入任务队列，需要 processingTimei 的时长完成执行。
现有一个单线程 CPU ，同一时间只能执行 最多一项 任务，该 CPU 将会按照下述方式运行：

如果 CPU 空闲，且任务队列中没有需要执行的任务，则 CPU 保持空闲状态。
如果 CPU 空闲，但任务队列中有需要执行的任务，则 CPU 将会选择 执行时间最短 的任务开始执行。如果多个任务具有同样的最短执行时间，则选择下标最小的任务开始执行。
一旦某项任务开始执行，CPU 在 执行完整个任务 前都不会停止。
CPU 可以在完成一项任务后，立即开始执行一项新任务。
返回 CPU 处理任务的顺序。

示例 1：
输入：tasks = [[1,2],[2,4],[3,2],[4,1], [2,3], [3,3]]
输出：[0,2,3,1]
解释：事件按下述流程运行： 
- time = 1 ，任务 0 进入任务队列，可执行任务项 = {0}
- 同样在 time = 1 ，空闲状态的 CPU 开始执行任务 0 ，可执行任务项 = {}
- time = 2 ，任务 1 进入任务队列，可执行任务项 = {1}
- time = 3 ，任务 2 进入任务队列，可执行任务项 = {1, 2}
- 同样在 time = 3 ，CPU 完成任务 0 并开始执行队列中用时最短的任务 2 ，可执行任务项 = {1}
- time = 4 ，任务 3 进入任务队列，可执行任务项 = {1, 3}
- time = 5 ，CPU 完成任务 2 并开始执行队列中用时最短的任务 3 ，可执行任务项 = {1}
- time = 6 ，CPU 完成任务 3 并开始执行任务 1 ，可执行任务项 = {}
- time = 10 ，CPU 完成任务 1 并进入空闲状态

示例 2：
输入：tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
输出：[4,3,2,0,1]
解释：事件按下述流程运行： 
- time = 7 ，所有任务同时进入任务队列，可执行任务项  = {0,1,2,3,4}
- 同样在 time = 7 ，空闲状态的 CPU 开始执行任务 4 ，可执行任务项 = {0,1,2,3}
- time = 9 ，CPU 完成任务 4 并开始执行任务 3 ，可执行任务项 = {0,1,2}
- time = 13 ，CPU 完成任务 3 并开始执行任务 2 ，可执行任务项 = {0,1}
- time = 18 ，CPU 完成任务 2 并开始执行任务 0 ，可执行任务项 = {1}
- time = 28 ，CPU 完成任务 0 并开始执行任务 1 ，可执行任务项 = {}
- time = 40 ，CPU 完成任务 1 并进入空闲状态
 
提示：
tasks.length == n
1 <= n <= 105
1 <= enqueueTimei, processingTimei <= 109
 */
class PQ {
    constructor() {
        this.queue = []
    }

    offer(element) {
        if (!this.queue.length || element[1] < this.queue[0][1]) {
            this.queue.unshift(element)
            return
        }
        if (element[1] > this.queue[this.queue.length - 1][1]) {
            this.queue.push(element);
            return;
        }
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid][1] < element[1]) {
                l = mid + 1
            } else if (this.queue[mid][1] > element[1]) {
                r = mid - 1
            } else if (this.queue[mid][1] === element[1]) {
                if (this.queue[mid][2] < element[2]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
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
// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    if (!tasks.length) { return [] }
    tasks.forEach((val, idx) => {
        val.push(idx)
    })
    tasks.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let queue = new PQ()
    queue.offer(tasks[0])
    let i = 1
    let limit = tasks[0][0]
    let res = []
    while (queue.length) {
        let ele = queue.poll()
        limit += ele[1]
        res.push(ele[2])
        while (i < tasks.length) {
            if (tasks[i][0] > limit) {
                break
            } else {
                queue.offer(tasks[i])
                i++
            }
        }
    }
    return res
};
// @lc code=end

var tasks = []
// wrong: [6,1,2,9,4,10,0,11,13,5,3,8,12,7]
// right: [6,1,2,9,4,10,0,11,5,13,3,8,12,7]
let r = getOrder(tasks)
console.log('res :>> ', r);