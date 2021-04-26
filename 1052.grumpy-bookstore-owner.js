/*
 * @lc app=leetcode id=1052 lang=javascript
 *[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
 * [1052] Grumpy Bookstore Owner
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    let res = 0
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            res += customers[i]
            customers[i] = 0
        }
    }
    let maxSave = 0
    let j = 0
    let curr = 0
    for (let i = 0; i < customers.length; i++) {
        curr += customers[i]
        if(i +1 -j > X){
            curr -= customers[j]
            j++
        }
        maxSave = Math.max(maxSave, curr)
    }
    return res + maxSave
};
// @lc code=end

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)

/*
int n = cs.length;
int ans = 0;
for (int i = 0; i < n; i++) {
    if (grumpy[i] == 0) { ans += cs[i]; cs[i] = 0; }
}
int max = 0,
cur = 0;
for (int i = 0, j = 0; i < n; i++) {
    cur += cs[i]; if (i - j + 1 > x) cur -= cs[j++]; max = Math.max(max, cur);
}
return ans + max
*/