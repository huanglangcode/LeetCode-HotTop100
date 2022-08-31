/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
    let m = 0, p = 0, g = 0, mMax = 0, pMax = 0, gMax = 0
    for (let i = 0; i < garbage.length; i++) {
        let ga = garbage[i]
        for (const z of ga) {
            if (z === 'M') {
                m++
                mMax = Math.max(mMax, i)
            } else if (z === 'P') {
                p++
                pMax = Math.max(pMax, i)
            } else if (z === 'G') {
                g++
                gMax = Math.max(gMax, i)
            }
        }
    }
    let preSum = new Array(travel.length + 1)
    preSum[0] = 0
    for (let i = 0; i < travel.length; i++) {
        preSum[i + 1] = preSum[i] + travel[i]
    }
    return m + p + g + preSum[mMax] + preSum[pMax] + preSum[gMax]
};


var garbage = ["MMM", "PGM", "GP"], travel = [3, 10]

let res = garbageCollection(garbage, travel)
console.log('res', res)