/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let l = 0,
        r = letters.length - 1,
        v = target.charCodeAt()
    if (v >= letters[r].charCodeAt()) {
        return letters[0]
    }
    while (l < r) {
        let mid = (l + r) >> 1
        if (letters[mid].charCodeAt() <= v) {
            l = mid + 1
        } else if (letters[mid].charCodeAt() > v) {
            r = mid
        }
    }
    return letters[l]
};
// @lc code=end



var letters = ["a", "a", "a", "a", "a", "b", "b", "b", "b", "b", "c", "c", "c", "c", "c", "d", "d", "e", "e", "e", "e", "e", "f", "f", "g", "g", "h", "h", "i"],
    target = "i"
let r = nextGreatestLetter(letters, target)
console.log('res:', r);