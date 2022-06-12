/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 * int lengthOfLongestSubstring(string s) {
        vector<int> m(128, 0);
        int ans = 0;
        int i = 0;
        for (int j = 0; j < s.size(); j++) {
            i = max(i, m[s[j]]);
            m[s[j]] = j + 1;
            ans = max(ans, j - i + 1);
        }
        return ans;
    }
 * 
 * 
 */
var lengthOfLongestSubstring = function (s) {
    const hash = new Array(128).fill(-1)
    let ans = 0,
        start = 0
    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i)
        start = Math.max(start, hash[idx] + 1);
        ans = Math.max(ans, i - start + 1)
        hash[idx] = i
    }
    return ans

    /**
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let hash = {}
        let j = i
        while (hash[s[j]] === undefined && j < s.length) {
            hash[s[j]] = j
            j++
        }
        max = Math.max(max, j - i)
        i = hash[s[j]]
    }
    return max
     * 
     */
};
// @lc code=end

var s = "ckilbkd"

let ans = lengthOfLongestSubstring(s)
console.log('ans', ans);

/**
 * c k i l b k d
 * 
 * 
 * 
 * 
 * 
 */