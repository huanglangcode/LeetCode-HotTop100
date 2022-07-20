// // /**
// //  * !?',;.
// //  * @param {String} paragraph 
// //  * @param {Array} banned 
// //  */
// // function main(paragraph, banned) {
// //     const a = paragraph.replace(/[\!\?\',;\.]/g, '').split(" ")
// //     const set = new Set(banned)
// //     console.log('a :>> ', a);
// //     console.log('set :>> ', set);
// // }

// // var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
// //     banned = ["hit"]


// // main(paragraph, banned)

// /**
// 给你一个下标从 0 开始的整数数组 tasks ，
// 其中 tasks[i] 表示任务的难度级别。
// 在每一轮中，你可以完成 2 个或者 3 个 相同难度级别 的任务。
// 返回完成所有任务需要的 最少 轮数，如果无法完成所有任务，返回 -1 。

// 示例 1：

// 输入：tasks = [2,2,3,3,2,4,4,4,4,4]
// 输出：4
// 解释：要想完成所有任务，一个可能的计划是：
// - 第一轮，完成难度级别为 2 的 3 个任务。 
// - 第二轮，完成难度级别为 3 的 2 个任务。 
// - 第三轮，完成难度级别为 4 的 3 个任务。 
// - 第四轮，完成难度级别为 4 的 2 个任务。 
// 可以证明，无法在少于 4 轮的情况下完成所有任务，所以答案为 4 。
// 示例 2：

// 输入：tasks = [2,3,3]
// 输出：-1
// 解释：难度级别为 2 的任务只有 1 个，但每一轮执行中，只能选择完成 2 个或者 3 个相同难度级别的任务。因此，无法完成所有任务，答案为 -1 。
// 1 <= tasks.length <= 105
// 1 <= tasks[i] <= 109
//  */


// /**
//     if(n <5){return 0}
//     return Math.floor(n/5) + trailingZeroes(Math.floor(n/5))
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxTrailingZeros = function (grid) {
//     let m = grid.length, n = grid[0].length
//     let arr = []
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] % 5 === 0) {
//                 arr.push([i, j])
//             }
//         } 
//     }
//     if (!arr.length) return 0
//     let cnt = 0
//     for (let i = 0; i < arr.length; i++) {
//         let [x, y] = arr[i]
//     }
// };

// var grid = [
//     [23, 17, 15, 3, 20],
//     [8, 1, 20, 27, 11],
//     [9, 4, 6, 2, 21],
//     [40, 9, 1, 10, 6],
//     [22, 7, 4, 5, 3]
// ]

// let res = maxTrailingZeros(grid)
// console.log('res :>> ', res);
// /**
//  * @param {number[]} tasks
//  * @return {number}
//  */
// // var minimumRounds = function (tasks) {
// //     let hash = {}
// //     for (let i = 0; i < tasks.length; i++) {
// //         hash[tasks[i]] = hash[tasks[i]] + 1 || 1
// //     }
// //     let res = 0
// //     for (const [key, value] of Object.entries(hash)) {
// //         if (value < 2) { return -1 }
// //         if (value === 2 || value === 3) {
// //             res += 1
// //         } else {
// //             res += Math.ceil(value / 3)
// //         }
// //     }
// //     return res
// // };

// // var tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4]

// // let res = minimumRounds(tasks)
// // console.log('res :>> ', res);
// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// // var digitSum = function (s, k) {
// //     if (s.length <= k) {
// //         return s
// //     }
// //     let tempArr = []
// //     for (let i = 0; i < s.length; i += k) {
// //         tempArr.push(s.slice(i, i + k))
// //     }
// //     let arr = []
// //     for (const temp of tempArr) {
// //         arr.push(eval(temp.split('').join("+")))
// //     }
// //     return digitSum(arr.join(''), k)
// // };

// // var s = "00000000", k = 3

// // let res = digitSum(s, k)
// // console.log('res :>> ', res);



// let a = 1
for (let i = 10; i <= 10; i++) {
    let a = 8
    let a = 10
    console.log('a :>> ', a);
}
