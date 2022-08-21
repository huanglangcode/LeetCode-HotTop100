/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let l = 0;
    let r = 0;
    for (const num of weights) {
        l = Math.max(num, l);
        r += l;
    }
    const helper = (k) => {
        let need = 0;
        let carried = 0;
        for (let i = 0; i < weights.length; i++) {
            carried += weights[i];
            if (carried > k) {
                i--;
                need++;
                carried = 0;
            }
        }
        if (carried) {
            need++;
        }
        return need
    }
    while (l < r) {
        let mid = (r + l) >> 1;
        let need = helper(mid)
        if (need <= D) {
            r = mid;
        } else if (need > D) {
            l = mid + 1;
        }
    }
    return l;
};
// @lc code=end

var weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5

let res = shipWithinDays(weights, days);
console.log('res :>> ', res);