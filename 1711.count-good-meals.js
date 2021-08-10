/*
 * @lc app=leetcode id=1711 lang=javascript
 *
 * [1711] Count Good Meals
 */
/**
 * 
A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.
You can pick any two different foods to make a good meal.
Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, 
return the number of different good meals you can make from this list modulo 109 + 7.
Note that items with different indices are considered different even if they have the same deliciousness value.
Example 1:
Input: deliciousness = [1,3,5,7,9]
Output: 4
Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
Their respective sums are 4, 8, 8, and 16, all of which are powers of 2. 
 */
// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
    let hash = {};
    let res = 0;
    let mod = 1e9 + 7;
    for (const ele of deliciousness) {
        for (let i = 1 << 22; i > 0; i >>= 1) {
            let needed = i - ele;
            if (hash[needed]) {
                res += hash[needed];
                if (res >= mod) {
                    res -= mod;
                }
            }
        }
        if (hash[ele]) {
            hash[ele] += 1;
        } else {
            hash[ele] = 1;
        }
    }
    return res;
};
// @lc code=end
const deliciousness = [1, 3, 5, 7, 9];
countPairs(deliciousness);
countPairs([1, 1, 1, 3, 3, 3, 7]);

// 1 缺 1 3 7 15 31...
// 1  hash[1].   res++
// 1  
// int max = 1 << 22;
// int mod = (int)1e9+7;
// ans += map.get(t);
// if (ans >= mod) ans -= mod;