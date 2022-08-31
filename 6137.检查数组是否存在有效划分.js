/**
 * @param {number[]} nums
 * @return {boolean}
首先初始化2，3的值，并返回长度为2和3的情况
遍历剩下的数组中的元素，如果存在1到3再到5这样的连续两次跳跃，直接返回false
动态转移方程有以下三种情况：
动态转移方程1: 22->222,即：有i-1为true，且nums[i] == nums[i-2]，可以推出i为true；
动态转移方程2: 1234-12344，即：有i-2为true，且nums[i]==nums[i-1]，可以推出i为true；
动态转移方程3: 1123-> 11234，即：有i-3为true，且nums[i]-nums[i-1]==nums[i-1]-nums[i-2]，可以推出i为true；
返回下标为len-1的结果即可
 */
function validPartition(nums) {
    let n = nums.length, dp = new Array(n).fill(false)
    dp[0] = true
    dp[1] = nums[0] === nums[1]
    for (let i = 2; i < n; i++) {
    }
    return dp[n - 1]
}
var nums = [4, 4, 4, 5, 6, 7, 8]

var result = validPartition(nums)

console.log('res2', result)


// enum State {
//     Single,
//     Double,
//     Triple,
//     Increase,
//     MidIncrease,
//     None
// }

// var validPartition = function (nums: number[]): boolean {
//     let pre = nums[0], idx = 1
//     function getNext() {
//         return nums[idx++]
//     }
//     let state = State.Single
//     while (state !== State.None && idx < nums.length) {
//         let char = getNext()
//         console.log('char', char)
//         switch (state) {
//             case State.Single:
//                 switch (char) {
//                     case pre:
//                         state = State.Double
//                         break;
//                     case pre + 1:
//                         pre = char
//                         state = State.MidIncrease
//                         break
//                     default:
//                         state = State.None
//                         break;
//                 }
//                 break;
//             case State.Double:
//                 switch (char) {
//                     case pre:
//                         state = State.Triple
//                         break;
//                     default:
//                         state = State.Single
//                         break;
//                 }
//                 break;
//             case State.Triple:
//                 pre = char
//                 state = State.Single
//                 break;
//             case State.MidIncrease:
//                 switch (char) {
//                     case pre + 1:
//                         state = State.Increase
//                         break;
//                     default:
//                         state = State.None
//                         break;
//                 }
//                 break;
//             case State.Increase:
//                 state = State.Single
//                 break;
//             default:
//                 state = State.None
//                 break;
//         }
//     }
//     return state === State.Double || state === State.Increase || state === State.Triple
// };
