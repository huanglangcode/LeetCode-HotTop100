/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
    let arr = []
    for (let i = 0; i < capacity.length; i++) {
        arr.push(capacity[i] - rocks[i])
    }
    arr.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            ans++
        } else {
            if (additionalRocks >= arr[i]) {
                additionalRocks -= arr[i]
                ans++
            } else {
                break
            }
        }
    }
    return ans
};



var capacity = [10, 2, 2], rocks = [9, 2, 0], additionalRocks = 100

let res = maximumBags(capacity, rocks, additionalRocks)
console.log('res :>> ', res);