/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [asteroids[0]]
    for (let i = 1; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            stack.push(asteroids[i])
        } else {
            let top = stack
        }
    }
};
// @lc code=end

var asteroids = [10, 2, -5]