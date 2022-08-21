/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
我们有 n 栋楼，编号从 0 到 n - 1 。每栋楼有若干员工。由于现在是换楼的季节，部分员工想要换一栋楼居住。
给你一个数组 requests ，其中 requests[i] = [fromi, toi] ，表示一个员工请求从编号为 fromi 的楼搬到编号为 toi 的楼。
一开始 所有楼都是满的，所以从请求列表中选出的若干个请求是可行的需要满足 每栋楼员工净变化为 0 。
意思是每栋楼 离开 的员工数目 等于 该楼 搬入 的员工数数目。
比方说 n = 3 且两个员工要离开楼 0 ，一个员工要离开楼 1 ，一个员工要离开楼 2 ，如果该请求列表可行，应该要有两个员工搬入楼 0 ，一个员工搬入楼 1 ，一个员工搬入楼 2 。
请你从原请求列表中选出若干个请求，使得它们是一个可行的请求列表，并返回所有可行列表中最大请求数目。
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
    let arr = requests.filter(ele => ele[0] !== ele[1])
    let must = requests.length - arr.length
    const check = (num, arr) => {
        const transfers = Array(n).fill(0)
        for (let i = 0; i < arr.length; i++) {
            if (((num >> i) & 1) === 1) {

                transfers[arr[i][0]]--
                transfers[arr[i][1]]++
            }
        }
        return !transfers.some(ele => ele !== 0)
    }
    const getCnt = (num) => {
        let cnt = 0
        for (let i = num; i > 0; i = i >> 1) {
            cnt += i & 1
        }
        return cnt
    }
    let res = 0
    for (let i = (1 << arr.length) - 1; i >= 0; i--) {
        let cnt = getCnt(i)
        if (cnt <= res) {
            continue
        }
        if (check(i, arr)) {
            res = Math.max(res, cnt)
        }
    }
    return res + must
}
// @lc code=end

/**
 * 输入：n = 5, requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
输出：5
解释：请求列表如下：
从楼 0 离开的员工为 x 和 y ，且他们都想要搬到楼 1 。
从楼 1 离开的员工为 a 和 b ，且他们分别想要搬到楼 2 和 0 。
从楼 2 离开的员工为 z ，且他想要搬到楼 0 。
从楼 3 离开的员工为 c ，且他想要搬到楼 4 。
没有员工从楼 4 离开。
我们可以让 x 和 b 交换他们的楼，以满足他们的请求。
我们可以让 y，a 和 z 三人在三栋楼间交换位置，满足他们的要求。
所以最多可以满足 5 个请求。
 * 3
 */

var n = 5, requests = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]
let res = maximumRequests(n, requests)
console.log('res :>> ', res);


// requests = [[0, 1], [1, 2], [2, 3], [3, 0]]
// const helper = (arr) => {
//     let n = arr.length
//     const check = (selected, arr) => {
//         const transfers = Array(n).fill(0)
//         for (let i = 0; i < selected.length; i++) {
//             if (selected[i] === '1') {
//                 transfers[arr[i][0]]--
//                 transfers[arr[i][1]]++
//             }
//         }
//         return !transfers.some(ele => ele !== 0)
//     }
//     const getCnt = (selected) => {
//         let cnt = 0
//         for (let i = 0; i < selected.length; i++) {
//             if (selected[i] === '1') {
//                 cnt++
//             }
//         }
//         return cnt
//     }
//     let res = 0
//     for (let i = (1 << n) - 1; i >= 0; i--) {
//         let binarySelect = i.toString(2).padStart(n, "0")
//         let cnt = getCnt(binarySelect)
//         if (cnt <= res) {
//             continue
//         }
//         if (check(binarySelect, arr)) {
//             res = Math.max(res, cnt)
//         }
//     }
//     return res
// }

// let res = helper(requests)
// console.log('res :>> ', res);

var n = 324

let getCnt = (num) => {
    let cnt = 0
    for (let i = num; i > 0; i = i >> 1) {
        cnt += i & 1
    }
    return cnt
}

getCnt(n)