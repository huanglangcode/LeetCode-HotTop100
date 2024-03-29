/**
给你一个整数数组 cookies ，其中 cookies[i] 表示在第 i 个零食包中的饼干数量。
另给你一个整数 k 表示等待分发零食包的孩子数量，所有 零食包都需要分发。
在同一个零食包中的所有饼干都必须分发给同一个孩子，不能分开。分发的 不公平程度 定义为单个孩子在分发过程中能够获得饼干的最大总数。
返回所有分发的最小不公平程度。

输入：cookies = [8,15,10,20,8], k = 2
输出：31
解释：一种最优方案是 [8,15,8] 和 [10,20] 。
- 第 1 个孩子分到 [8,15,8] ，总计 8 + 15 + 8 = 31 块饼干。
- 第 2 个孩子分到 [10,20] ，总计 10 + 20 = 30 块饼干。
分发的不公平程度为 max(31,30) = 31 。
可以证明不存在不公平程度小于 31 的分发方案。

输入：cookies = [6,1,3,2,2,4,1,2], k = 3
输出：7
解释：一种最优方案是 [6,1]、[3,2,2] 和 [4,1,2] 。
- 第 1 个孩子分到 [6,1] ，总计 6 + 1 = 7 块饼干。 
- 第 2 个孩子分到 [3,2,2] ，总计 3 + 2 + 2 = 7 块饼干。
- 第 3 个孩子分到 [4,1,2] ，总计 4 + 1 + 2 = 7 块饼干。
分发的不公平程度为 max(7,7,7) = 7 。
可以证明不存在不公平程度小于 7 的分发方案。
提示：
2 <= cookies.length <= 8
1 <= cookies[i] <= 105
2 <= k <= cookies.length
*/
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    if (cookies.length === k) return Math.max(...cookies)
    let res = Infinity
    const helper = (idx, arr, used) => {
        if (idx >= cookies.length) {
            if (!used.some(v => v === 0)) {
                res = Math.min(res, Math.max(...arr))
            }
        } else {
            for (let i = 0; i < k; i++) {
                //进行减枝
                if (arr[i] + cookies[idx] >= res)
                    continue;
                arr[i] += cookies[idx]
                used[idx] = 1
                helper(idx + 1, arr, used)
                arr[i] -= cookies[idx]
                used[idx] = 0
                if (arr[i] == 0) {
                    break;
                }
            }
        }
    }
    helper(0, new Array(k).fill(0), new Array(cookies.length).fill(0))
    return res
};

var cookies = [9899456, 8291115, 9477657, 9288480, 5146275, 7697968, 8573153, 3582365, 3758448, 9881935, 2420271, 4542202], k = 7

let res = distributeCookies(cookies, k)
console.log('res :>> ', res);