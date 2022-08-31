
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    brackets.unshift([0, 0])
    let res = 0, i = 1
    while (brackets[i][0] < income) {
        res += (brackets[i][0] - brackets[i - 1][0]) * brackets[i][1]
        i++
    }
    res += (income - brackets[i - 1][0]) * brackets[i][1]
    return res / 100
};

var brackets = [[3, 50], [7, 10], [12, 25]], income = 10

let res = calculateTax(brackets, income)
console.log('res :>> ', res);

/**
 * 输入：brackets = [[3,50],[7,10],[12,25]], income = 10
输出：2.65000
解释：
前 $3 的税率为 50% 。需要支付税款 $3 * 50% = $1.50 。
接下来 $7 - $3 = $4 的税率为 10% 。需要支付税款 $4 * 10% = $0.40 。
最后 $10 - $7 = $3 的税率为 25% 。需要支付税款 $3 * 25% = $0.75 。
需要支付的税款总计 $1.50 + $0.40 + $0.75 = $2.65 。

 */