/**
给你一个长桌子，桌子上盘子和蜡烛排成一列。
给你一个下标从 0 开始的字符串 s ，它只包含字符 '*' 和 '|' ，其中 '*' 表示一个 盘子 ，'|' 表示一支 蜡烛 。
同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] 表示 子字符串 s[lefti...righti] （包含左右端点的字符）。
对于每个查询，你需要找到 子字符串中 在 两支蜡烛之间 的盘子的 数目 。
如果一个盘子在 子字符串中 左边和右边 都 至少有一支蜡烛，那么这个盘子满足在 两支蜡烛之间 。
比方说，s = "||**||**|*" ，查询 [3, 8] ，表示的是子字符串 "*||**|" 。
子字符串中在两支蜡烛之间的盘子数目为 2 ，子字符串中右边两个盘子在它们左边和右边 都 至少有一支蜡烛。
请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。

示例 1:
输入：s = "**|**|***|", queries = [[2,5],[5,9]]
输出：[2,3]
解释：
- queries[0] 有两个盘子在蜡烛之间。
- queries[1] 有三个盘子在蜡烛之间。

示例 2:
输入：s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
输出：[9,0,0,0,0]
解释：
- queries[0] 有 9 个盘子在蜡烛之间。
- 另一个查询没有盘子在蜡烛之间。

提示：
3 <= s.length <= 105
s 只包含字符 '*' 和 '|' 。
1 <= queries.length <= 105
queries[i].length == 2
0 <= lefti <= righti < s.length
 * 
 */
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    let nearestLeft = [], nearestRight = [], plateSum = [], n = s.length
    for (let i = 0; i < n; i++) {
        if (s[i] === '*') {
            nearestLeft[i] = nearestLeft[i - 1] || -1
            plateSum[i] = plateSum[i - 1] + 1 || 1
        } else if (s[i] === '|') {
            nearestLeft[i] = i
            plateSum[i] = plateSum[i - 1] || 0
        }
        if (s[n - i - 1] === '*') {
            nearestRight[n - i - 1] = nearestRight[n - i] || -1
        } else if (s[n - i - 1] === '|') {
            nearestRight[n - i - 1] = n - i - 1
        }
    }
    let res = new Array(queries.length).fill(0)
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        let r = nearestLeft[end]
        let l = nearestRight[start]
        if (r < 0 || l < 0 || l >= r) {
            res[i] = 0
        } else {
            res[i] = plateSum[r] - plateSum[l]
        }
    }
    return res
};

// "||*"
// [[2,2]]
var s = "***|**|*****|**||**|*", queries = [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]
s = "||*", queries = [[2, 2]]
let res = platesBetweenCandles(s, queries)
console.log('res :>> ', res);

// 2 , 3
// |**|
/**
 * 通过以下几个技巧来解决：
（1）通过前缀和的方法来确定任意区间的盘子数量：plate_cnt[i]表示[0, i]区间内盘子数量，则区间[i, j]内的盘子数量为plate_cnt[j] - plate_cnt[i - 1]
（2）记录每个位置左边最近的蜡烛位置和右边最近的蜡烛位置，则区间[i, j]最左边的蜡烛位置和最右边的蜡烛位置分别为: right_candle_pos[i] 和 left_candle_pos[j]
    则给定任意区间[i, j]， 区间内满足题意的盘子数量为区间内最左边的蜡烛位置和最右边的蜡烛位置确定的子区间内的盘子数量，即plate_cnt[left_candle_pos[j]] - plate_cnt[right_candle_pos[i]]
 * 
 * 0  1  2  3  4  5  6  7
 * *  *  |  *  |  *  |  *
 * 1  2  2  3  3  4  4  5
 * 
 * 0  0  1  1  2  2  3  3
 * 
 * 囊括了3个盘子 3个蜡烛
 * 找到每一段的左蜡烛 和 右蜡烛
 * 
 */