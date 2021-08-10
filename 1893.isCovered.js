/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    let hash = new Array(51).fill(0);
    ranges.forEach((range) => {
        hash.fill(1, range[0], range[1] + 1);
    });
    let flag = true;
    for (let i = left; i <= right; i++) {
        if (hash[i] === 0) {
            flag = false;
        }
    }
    return flag;
};

isCovered([[1, 2], [3, 4], [5, 6]], 2, 5);
isCovered([[1, 10], [10, 20]], 21, 21);