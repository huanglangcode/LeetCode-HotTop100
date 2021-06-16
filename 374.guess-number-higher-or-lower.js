/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */

var guess = function (num) {
    if (num === 6) {
        return 0;
    } else if (num > 6) {
        return -1;
    } else if (num < 6) {
        return 1;
    }
};
var guessNumber = function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
        const mid = Math.floor(start - (start - end) / 2);
        let res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            end = mid;
        } else if (res === 1) {
            start = mid + 1;
        }
    }
};

guessNumber(10);
// @lc code=end

// guessNumber(10);