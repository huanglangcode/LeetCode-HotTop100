/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 * 
给定两个以 升序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。
定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。


[1,2,2,2,1,1]
[1,2,4,6,7,11]

[1,1,2,1,2,2]
[1,1,1,2,2,3]

示例 1:
输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [1,2],[1,4],[1,6]
解释: 返回序列中的前 3 对数：
     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

示例 2:
输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [1,1],[1,1]
解释: 返回序列中的前 2 对数：
     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

示例 3:
输入: nums1 = [1,2], nums2 = [3], k = 3 
输出: [1,3],[2,3]
解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]

提示:
1 <= nums1.length, nums2.length <= 105
-109 <= nums1[i], nums2[i] <= 109
nums1 和 nums2 均为升序排列
1 <= k <= 1000
 */

class PQ {
    constructor() {
        this.queue = []
    }

    offer(element) {
        if (!this.queue.length || element[0] < this.queue[0][0]) {
            this.queue.unshift(element)
            return
        }
        if (element[0] > this.queue[this.queue.length - 1][0]) {
            this.queue.push(element);
            return;
        }
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid][0] <= element[0]) {
                l = mid + 1
            } else if (this.queue[mid][0] > element[0]) {
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

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// Commented Version
var kSmallestPairs = function (nums1, nums2, k) {
    nums1 = nums1.slice(0, k)
    nums2 = nums2.slice(0, k)
    let pq = new PQ()
    for (let i = 0; i < Math.min(nums1.length, nums2.length, k); i++) {
        pq.offer([nums1[i] + nums2[0], i, 0])
    }
    let ans = []
    while (k-- && pq.length > 0) {
        let ele = pq.poll()
        ans.push([nums1[ele[1]], nums2[ele[2]]])
        if (++ele[2] < nums2.length) {
            pq.offer([nums1[ele[1]] + nums2[ele[2]], ele[1], ele[2]])
        }
    }
    return ans
};

// @lc code=end

var nums1 = [1, 5, 6], nums2 = [2, 4, 9], k = 4
// var nums1 = []
// var nums2 = []
// for (let i = 1; i < 10001; i++) {
//     nums1.push(i)
//     nums2.push(i)
// }
// var k = 1000
let res = kSmallestPairs(nums1, nums2, k)
console.log('res :>> ', res);

/*
     1 2
     5 2
     6 2

     弹出 1 2 
     弹入 1 4
     
    ->

     1 4
     5 2
     6 2

     弹出 1 4
     弹入 5 4

    ->

     5 2
     6 2
     5 4

     弹出 5 2
     弹入 6 4

    ->

    6 2
    5 4
    6 4
*/