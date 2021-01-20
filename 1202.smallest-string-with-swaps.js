/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    let ufs = [];
    for (let i = 0; i < s.length; i++) {
        ufs[i] = i
    }
    for (const pair of pairs) {
        union(pair[0], pair[1], ufs)
    }
    console.log('ufs :>> ', ufs);
};

var union = (a, b, ufs) => {
    let parent1 = find(a, ufs)
    let parent2 = find(b, ufs)
    if (parent1 !== parent2) {
        ufs[find(a, ufs)] = find(b, ufs);
    }
}

var find = (ele, ufs) => {
    return ele == ufs[ele] ? ele : (ufs[ele] = find(ufs[ele]));
}

// [[0,3],[1,2],[0,2]]

smallestStringWithSwaps('dcab', [[0, 3], [1, 2], [0, 2]])