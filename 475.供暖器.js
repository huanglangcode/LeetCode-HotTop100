/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
在加热器的加热半径范围内的每个房屋都可以获得供暖。
现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
说明：所有供暖器都遵循你的半径标准，加热的半径也一样。

示例 1:
输入: houses = [1,2,3], heaters = [2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。

示例 2:
输入: houses = [1,2,3,4], heaters = [1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。

示例 3：
输入：houses = [1,5], heaters = [2]
输出：3

提示：
1 <= houses.length, heaters.length <= 3 * 104
1 <= houses[i], heaters[i] <= 109

对于每个房屋，要么用前面的暖气，要么用后面的，二者取近的，得到距离；
对于所有的房屋，选择最大的上述距离。
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.push(-Infinity)
    heaters.push(Infinity)
    heaters.sort((a, b) => a - b)
    console.log('heaters :>> ', heaters);
    let idx = 0
    const helper = (house) => {
        while (heaters[idx] < house && idx < heaters.length) {
            idx++
        }
        let res = Math.min(house - heaters[idx - 1], heaters[idx] - house)
        console.log(idx, heaters[idx], house, heaters[idx - 1]);
        console.log('res :>> ', res);
        if (idx > 0) {
            idx--
        }
        return res
    }
    let res = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < houses.length; i++) {
        res = Math.max(helper(houses[i]), res)
    }
    return res
};
// @lc code=end

var houses = [153851501, 4844897, 616783871, 382955828, 330111137], heaters =
    [723153177, 70982397, 147722294, 70477904, 51621609, 606946231, 190959745, 912844175, 341853635]
// 161834419
// 15056343
console.log(findRadius(houses, heaters))