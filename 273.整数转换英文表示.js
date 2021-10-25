/*
 * @lc app=leetcode.cn id=273 lang=javascript
 * [273] 整数转换英文表示
 */

// @lc code=start
const t = {
    90: 'Ninety', 80: 'Eighty', 70: 'Seventy', 60: 'Sixty', 50: 'Fifty', 40: 'Forty', 30: 'Thirty', 20: 'Twenty',
    19: 'Nineteen', 18: 'Eighteen', 17: 'Seventeen', 16: 'Sixteen', 15: 'Fifteen', 14: 'Fourteen', 13: 'Thirteen', 12: 'Twelve', 11: 'Eleven',
    10: 'Ten', 9: 'Nine', 8: 'Eight', 7: 'Seven', 6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three', 2: 'Two', 1: 'One', 00: "", 0: ""
}
const base = { 0: "", 1: " Thousand ", 2: " Million ", 3: " Billion " }
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === "0") return "Zero"
    const numStr = num.toString()

    let arr = []
    for (let i = numStr.length; i > 0; i -= 3) {
        const curr = i - 3 >= 0 ? numStr.slice(i - 3, i) : numStr.slice(0, i)
        arr.push(helper(curr))
    }
    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        let preFix = base[i]
        ans = (!!arr[i] ? arr[i] + preFix : arr[i]) + ans
    }
    return ans.trim()
};

var helper = (num) => {
    let res = ""
    if (num.length === 3) {
        res += num[0] === "0" ? "" : `${t[num[0]]} Hundred`
        res += +num[1] > 1 ? (` ${t[+num[1] * 10]}` + (+num[2] === 0 ? "" : ` ${t[num[2]]}`)) : ` ${t[+num.slice(1)]}`
    } else if (num.length === 2) {
        res += +num > 20 ? (` ${t[+num[0] * 10]}` + (+num[1] === 0 ? "" : ` ${t[num[1]]}`)) : t[+num]
    } else {
        res += t[+num]
    }
    return res.trim()
}
// @lc code=end

let res1 = numberToWords(1001)
console.log('res1 :>>', res1);
// "Thirty Million Five"
// let res2 = numberToWords(112)
// console.log('res2 :>> ', res2);
//"One Hundred Twelve"