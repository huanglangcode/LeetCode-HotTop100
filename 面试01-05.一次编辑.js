// 字符串有三种编辑操作:
// 插入一个字符、删除一个字符或者替换一个字符。
//  给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

// 示例 1:
// 输入: 
// first = "pale"
// second = "ple"
// 输出: True

// 示例 2:
// 输入: 
// first = "pales"
// second = "pal"
// 输出: False

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    if (first === second) return true
    if (Math.abs(first.length - second) > 1) return false
    if (first.length === second.length) {
        let diff = 0
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                if (diff >= 1) return false
                diff++
            }
        }
        return diff === 1
    }
    const helper = (long, short) => {
        let i = 0
        while (long[i] === short[i]) {
            i++
        }
        return long.slice(0, i) + long.slice(i + 1) === short
    }
    return first.length > second.length ? helper(first, second) : helper(second, first)
};

var first = "ab", second = 'pal'

let res = oneEditAway(first, second)
console.log('res :>> ', res);