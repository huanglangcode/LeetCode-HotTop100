/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let sqrArr = []
    for (let i = 1; Math.pow(i, 2) <= n; i++) {
        sqrArr.push(Math.pow(i, 2))
    }
    // console.log(sqrArr)
    let beiwanglu = {}
    let result = helper(sqrArr, n, beiwanglu)
    // console.log(result)
    return result
};

var helper = (arr, n, beiwanglu) => {
    // console.log('beiwanglu', beiwanglu)
    if(beiwanglu[n]){
        return beiwanglu[n]
    }
    if (arr.indexOf(n) !== -1) {
        return 1
    }
    let result = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            break
        }
        result = Math.min(result, helper(arr, n - arr[i], beiwanglu) + 1)
    }
    beiwanglu[n] = result
    return result
}

numSquares(66)