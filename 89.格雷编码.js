/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码

n 位格雷码序列 是一个由 2^n 个整数组成的序列，其中：
每个整数都在范围 [0, 2^n - 1] 内（含 0 和 2^n - 1）
    第一个整数是 0
    一个整数在序列中出现 不超过一次
    每对 相邻 整数的二进制表示 恰好一位不同 ，且 第一个 和 最后一个 整数的二进制表示 恰好一位不同
给你一个整数 n ，返回任一有效的 n 位格雷码序列 。

示例 1：
输入：n = 2
输出：[0,1,3,2]
解释：
[0,1,3,2] 的二进制表示是 [00,01,11,10] 。
- 00 和 01 有一位不同
- 01 和 11 有一位不同
- 11 和 10 有一位不同
- 10 和 00 有一位不同
[0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。
- 00 和 10 有一位不同
- 10 和 11 有一位不同
- 11 和 01 有一位不同
- 01 和 00 有一位不同

示例 2：
输入：n = 1
输出：[0,1]
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

// 0 vector<int> res = {0,1};
// n == 1 时 : res = {0,1}
// for(int i = 2;i <= n;i ++) {
//     // 开始构造 n == i 时的序列 
//     // 从 n == i - 1 的序列构造来
//     for(int j = res.size() - 1;j >= 0;j --) {
//         res.push_back(res[j] | (1 << (i - 1)));
//     }
// }
// return res;

// 1
// 0 1
// 00 01 11 10
// 000 001 011 010 110 111 101 100 
// 0   1   3   2   6   7   5   4
var grayCode = function (n) {
    let res = [0, 1]
    for (let i = 1; i < n; i++) {
        let tempLength = res.length
        let temp = res.slice()
        for (let j = tempLength - 1; j >= 0; j--) {
            temp[j] = (1 << i) | temp[j]
        }
        res = [...res, ...temp.reverse()]
    }
    return res
};
// @lc code=end

let res = grayCode(3)
console.log('res :>> ', res);