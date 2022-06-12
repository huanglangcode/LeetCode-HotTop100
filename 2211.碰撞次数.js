/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
    let stackR = 0
    let res = 0
    for (let i = 0; i < directions.length; i++) {
        if (directions[i] === 'R') {
            stackR++
        } else if (directions[i] === 'S') {
            res += stackR
            stackR = 0
        } else {
            res += stackR
            stackR = 0
        }
    }
    let stackL = 0
    for (let i = directions.length - 1; i >= 0; i--) {
        if (directions[i] === 'L') {
            stackL++
        } else if (directions[i] === 'S') {
            res += stackL
            stackL = 0
        } else {
            res += stackL
            stackL = 0
        }
    }
    return res
};

var directions = "RLRSLLLRRRSLLLLRRRRLLLSLLLLRRSLSRLSLRRSL"

countCollisions(directions)