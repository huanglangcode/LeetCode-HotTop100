const validSet = new Set(['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'])
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    const str = num.toString(), dp = new Array(str.length + 1).fill(1)
    for (let i = 1; i < str.length; i++) {
        if (validSet.has(str[i - 1] + str[i])) {
            dp[i + 1] = dp[i] + dp[i - 1]
        } else {
            dp[i + 1] = dp[i]
        }
    }
    return dp[dp.length - 1]
};

var num = 1201110

// num = 12258

translateNum(num)


/**
 * 1 2 2 5 
 * 12 2 5 
 * 1 22 5 
 * 1 2 25 
 * 12 25 
 * 
 * 
 * 1 2 2
 * 12 2
 * 1 22
 * 
 * 1 2
 * 12
 * 
 */

var arr = new Array(26).fill(0).map((ele, idx) => parseInt(idx))