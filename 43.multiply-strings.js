/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1[0] === '0' || num2[0] === '0') {
        return '0';
    }
    let last = '';
    let times = '';
    for (let i = num2.length - 1; i >= 0; i--) {
        let tempRes = '';
        let a = num2[i];
        let carry = 0;
        for (let j = num1.length - 1; j >= 0; j--) {
            let b = num1[j];
            let q = +a * +b + carry;
            if (q >= 10) {
                carry = Math.floor(q / 10);
                q = q % 10;
            } else {
                carry = 0;
            }
            tempRes = q + tempRes;
        }
        if (carry) {
            tempRes = carry + tempRes;
        }
        tempRes = tempRes + times;
        tempRes = addition(tempRes, last);
        last = tempRes;
        times += '0';
    }
    return last;
};

var addition = (num1, num2) => {
    let res = '';
    let carry = 0;
    const helper = (num1, num2) => {
        for (let i = num1.length - 1; i >= 0; i--) {
            let q = +num2[i] + +num1[i] + carry;
            if (q >= 10) {
                q = q - 10;
                carry = 1;
            } else {
                carry = 0;
            }
            res = q + res;
        }
        if (carry) {
            res = carry + res;
        }
    };

    if (num1.length > num2.length) {
        num2 = num2.padStart(num1.length, '0');
    } else {
        num1 = num1.padStart(num2.length, '0');
    }
    helper(num1, num2);
    return res;
};
// @lc code=end