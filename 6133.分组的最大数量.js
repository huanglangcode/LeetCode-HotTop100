/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function (grades) {
    if (grades.length < 3) return 1
    grades.sort((a, b) => a - b)
    let cnt = 0, idx = 0
    while (idx < grades.length) {
        if (idx + cnt < grades.length) {
            idx += (++cnt)
        } else {
            break
        }

    }
    return cnt
};

var grades = [10, 6, 12, 7, 3, 5, 8, 13, 14, 15]

maximumGroups(grades)