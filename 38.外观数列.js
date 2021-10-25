/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1"
    }
    return helper(countAndSay(n - 1))
};

const helper = (str) => {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        let count = 1
        let curr = str[i]
        while (curr === str[i + 1]) {
            i++
            count++
        }
        res += `${count}${curr}`
    }
    return res
}
// @lc code=end

/**
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
 */
let res1 = countAndSay(1)
console.log('res1 :>> ', res1);
let res2 = countAndSay(2)
console.log('res2 :>> ', res2);
let res3 = countAndSay(3)
console.log('res3 :>> ', res3);
let res4 = countAndSay(4)
console.log('res4 :>> ', res4);
let res5 = countAndSay(5)
console.log('res5 :>> ', res5);