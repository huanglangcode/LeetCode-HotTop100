/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    let l = distance.length
    distance = distance.concat(distance)
    let ans1 = 0, ans2 = 0
    if (start > destination) {
        [start, destination] = [destination, start]
    }
    for (let i = start; i < destination; i++) {
        ans1 += distance[i]
    }
    for (let i = destination; i < l + start; i++) {
        ans2 += distance[i]
    }
    return Math.min(ans1, ans2)
};
// @lc code=end

var distance = [7, 10, 1, 12, 11, 14, 5, 0],
    start = 7,
    destination = 2

let res = distanceBetweenBusStops(distance, start, destination)
console.log('res :>> ', res);