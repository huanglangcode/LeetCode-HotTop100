/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
/**
 * 很经典的题。

我们第一轮会删掉第kk个人，问题就变为对n-1n−1个人进行这个游戏。
假设我们知道f(n-1,k)f(n−1,k)最终剩下的人的编号,
由于我们删了第kk个人，n-1n−1个人的游戏是从原来第k+1k+1个人开始的，
也就是说原来的编号和新的编号有一个偏差kk。
以坐标从00到n-1n−1来看的话(去掉1的偏差减少计算量,最终加一次1即可)，有公式:
f(n,k) = (f(n - 1, k) + k) \% nf(n,k)=(f(n−1,k)+k)%n

当只剩一个人时，他必然活下来，
即f(1,k) = 0f(1,k)=0,
我们从f(1,k)f(1,k)推出f(2,k)f(2,k)一直到f(n,k)f(n,k)即可。
 * 
 * 
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    if (n === 1) {
        return 1;
    }
    return (k + findTheWinner(n - 1, k) - 1) % n + 1;
};
// @lc code=end


var n = 6, k = 5

let res = findTheWinner(n, k)
console.log('res :>> ', res);