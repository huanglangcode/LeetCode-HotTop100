/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (map[curr] === undefined) {
            map[curr] = [i]
        } else {
            map[curr].push(i)
        }
    }
    for (const [c, [start, end]] of Object.entries(map)) {
        if (end - start !== distance[c.charCodeAt() - 'a'.charCodeAt()] + 1) return false
    }
    return true
};

var s = "abaccb", distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let res = checkDistances(s, distance)
console.log('res', res)