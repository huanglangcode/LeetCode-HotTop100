/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = {};
    for (const str of strs) {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 97] += 1;
        }
        !!hash[arr] ? hash[arr].push(str) : hash[arr] = [str];
    }

    return Object.values(hash);
};


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "adu"]);
/**
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],

输出:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]

eat.charCodeAt(0)
101
eat.charCodeAt(1)
97
eat.charCodeAt(2)
116


aud.charCodeAt(0)
97
aud.charCodeAt(1)
100
aud.charCodeAt(2)
117
 */