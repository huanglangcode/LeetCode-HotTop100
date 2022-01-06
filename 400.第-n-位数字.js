/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 * 
给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位数字。

示例 1：
    输入：n = 3
    输出：3
示例 2：
    输入：n = 11
    输出：0
    解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。 

1-9             1 * 9 位  9 
10-99           2 * 90 位 180   
100-999         3 * 900 位 2700       
1000-9999       4 * 9000 位
10000-99999     5 * 90000 位
100000-999999   6 * 900000 位
1000000-9999999 7 * 9000000 位
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let len = 1
    let base = 9
    let curr = len * base
    while (curr < n) {
        len++
        base *= 10
        curr = len * base
    }
    let l = len
    let startNum = base / 9
    while (len >= 1) {
        len--
        base /= 10
        n -= len * base
    }
    console.log('n :>> ', n);
    console.log('l :>> ', l);
    console.log('startBase :>> ', startNum);
    let targetNum = startNum + Math.floor((n - 1) / l)
    console.log('targetNum :>> ', targetNum);
    let res = targetNum.toString().charAt((n - 1) % l)
    console.log('res :>> ', res);
    return res
};
// @lc code=end

// 比如 192 
findNthDigit(37865489)

// 189 99