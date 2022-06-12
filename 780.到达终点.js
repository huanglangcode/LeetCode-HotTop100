/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
    if (sx > tx || sy > ty) return false; //开始即无法转移得到
    while (sx < tx && sy < ty) {
        if (tx < ty) ty %= tx;
        else tx %= ty;
    }
    if (sx != tx && sy != ty) return false;
    if (sx == tx && sy <= ty) return (ty - sy) % sx == 0;
    if (sy == ty && sx <= tx) return (tx - sx) % sy == 0;
    return false;
};
// @lc code=end
var sx = 1,
    sy = 1,
    tx = 2,
    ty = 2
let res = reachingPoints(sx, sy, tx, ty)
console.log('res', res);