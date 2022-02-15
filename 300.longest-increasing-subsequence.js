/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let tail = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]
    if (curr > tail[tail.length - 1]) {
      tail.push(curr)
    } else {
      let l = 0, r = tail.length - 1
      while (l < r) {
        let mid = (l + r) >> 1
        if (tail[mid] === curr) {
          r = mid
        } else if (tail[mid] > curr) {
          r = mid
        } else if (tail[mid] < curr) {
          l = mid + 1
        }
      }
      tail.splice(l, 1, curr)
    }
  }
  return tail.length;
};

// 比如序列是78912345，前三个遍历完以后tail是789，
// 这时候遍历到1，就得把1放到合适的位置，于是在tail二分查找1的位置，变成了189（如果序列在此时结束，因为res不变，所以依旧输出3），
// 再遍历到2成为129，然后是123直到12345 
// @lc code=end
let res = lengthOfLIS([6, 3, 5, 10, 11, 2, 9, 1, 13, 7, 4, 8, 12])
console.log('res :>> ', res);
/**
 * 8 10  7 101
 * 2  9    18
 *    5
 *    3
1. 只能把点数小的牌压到点数比它大的牌上；
2. 如果当前牌点数较大没有可以放置的堆，则新建一个堆，把这张牌放进去；
3. 如果当前牌有多个堆可供选择，则选择最左边的那一堆放置

 * tail[i] 表示：长度为 i + 1 的 所有 上升子序列的结尾的最小值。

 * 6 3 5 10 J 2 9 A K 7    4 8 Q
 *
 * 6 5 10 J K
 * 3 4 9
 * 2   7
 * A
 *
 *
 *
 * 1 5 7 11 13   -> 4
 */

// const findIdx = (tail, curr) => {
//   let l = 0, r = tail.length - 1
//   while (l < r) {
//     let mid = (l + r) >> 1
//     if (tail[mid] === curr) {
//       r = mid
//     } else if (tail[mid] > curr) {
//       r = mid
//     } else if (tail[mid] < curr) {
//       l = mid + 1
//     }
//   }
//   console.log('l :>> ', l, r);
// }
// const nums = [1, 5, 7, 11, 13, 18, 30, 35], target = 5
// let idx = findIdx(nums, target)