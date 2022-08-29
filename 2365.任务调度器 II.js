/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
输入：tasks = [5,8,8,5], space = 2
输出：6
解释：
6 天完成所有任务的一种方法是：
第 1 天：完成任务 0 。
第 2 天：完成任务 1 。
第 3 天：休息。
第 4 天：休息。
第 5 天：完成任务 2 。
第 6 天：完成任务 3 。
可以证明无法少于 6 天完成所有任务。

给你一个下标从 0 开始的正整数数组 tasks ，表示需要 按顺序 完成的任务，其中 tasks[i] 表示第 i 件任务的 类型 。
同时给你一个正整数 space ，表示一个任务完成 后 ，另一个 相同 类型任务完成前需要间隔的 最少 天数。
在所有任务完成前的每一天，你都必须进行以下两种操作中的一种：
完成 tasks 中的下一个任务
休息一天
请你返回完成所有任务所需的 最少 天数。

输入：tasks = [1,2,1,2,3,1], space = 3
输出：9
解释：
9 天完成所有任务的一种方法是：
第 1 天：完成任务 0 。
第 2 天：完成任务 1 。
第 3 天：休息。
第 4 天：休息。
第 5 天：完成任务 2 。
第 6 天：完成任务 3 。
第 7 天：休息。
第 8 天：完成任务 4 。
第 9 天：完成任务 5 。
可以证明无法少于 9 天完成所有任务。


        unordered_map<int,LL> same;
        LL day=0;
        for(int x:a)
        {
            // 不考虑相同任务的时间间隔是每运行一个任务，时间+1的
            day+=1;
            // 遇到同类型的任务，为了保证本任务能运行，与上次任务的时间至少间隔 space 天
            if(same.count(x))day=max(day,same[x]+space+1);
            // 更新完成该任务的时间
            same[x]=day;
        }
        return day;

提示：
1 <= tasks.length <= 105
1 <= tasks[i] <= 109
1 <= space <= tasks.length
 */
var taskSchedulerII = function (tasks, space) {
    let map = new Map()
    let day = 0
    for (const task of tasks) {
        day++
        if (map.has(task)) { // 遇到了上次执行过的任务. 比如 1号任务在第1天执行过. 需要等待3天. 此时是第二天的话.则需要1+3+1第五天才能执行. 如果此时是第6天. 已经超过了1+ 3+ 1的等待时间 则直接取当前天数
            day = Math.max(day, map.get(task) + space + 1)
        }
        map.set(task, day)
    }
    return day
};

var tasks = [1, 2, 1, 2, 3, 1], space = 3

console.time('taskSchedulerII')
let res = taskSchedulerII(tasks, space)
console.timeEnd('taskSchedulerII')
console.log('res : 666937 ===', res)