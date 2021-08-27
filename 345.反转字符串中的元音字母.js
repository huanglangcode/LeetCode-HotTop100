/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
// 输入："leetcode"
// 输出："leotcede"

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let l = 0, r = s.length - 1
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split('')
    while (l < r) {
        while (!set.has(arr[l]) && l < r) {
            l++
        }
        while (!set.has(arr[r]) && l < r) {
            r--
        }
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr.join('')
};
// @lc code=end