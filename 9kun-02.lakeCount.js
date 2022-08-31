/**
 * @param {string[]} field
 * @return {number}
 */
var lakeCount = function (field) {
    const m = field.length, n = field[0].length
    let queue = [], visited = new Set()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (field[i][j] === 'W') queue.push([i, j])
        }
    }
    const helper = (i, j) => {
        let idx = twoD2oneD(i, j, n)
        visited.add(idx)
        for (const [x, y] of DIRS) {
            let nxtI = i + x
            let nxtJ = j + y
            if (nxtI >= 0 && nxtI < m && nxtJ >= 0 && nxtJ < n && field[nxtI][nxtJ] === 'W' && !visited.has(twoD2oneD(nxtI, nxtJ, n))) {
                helper(nxtI, nxtJ)
            }
        }
    }
    let res = 0
    for (let z = 0; z < queue.length; z++) {
        let [i, j] = queue[z]
        let idx = twoD2oneD(i, j, n)
        if (visited.has(idx)) continue
        helper(i, j)
        res++
    }
    return res
};

const DIRS = [[-1, -1], [-1, 0], [-1, 1], [1, 1], [1, -1], [1, 0], [0, -1], [0, 1]]

const twoD2oneD = (i, j, n) => {
    return i * n + j
}

var field = ["W..WWWWW.W..W...WW.WW.WW.W.W..WW..WWWW...WWW.WW.W.WW..W.........WWWWWWWWW.......WWW...W.W...W", "WW.WWW.W..W..W.....WWWWW.WWW.W.WWWW.W.WWWW.WWWW..W.W.WWW...W..WWW.W.W..W...WW..WW.W....W..WW.", ".W....WW...W......W..WWWW.WWWWW..W...W..W.WW...WW..W.WW...W...WWWWWWW..WW.WWWW.W..WWW.WW.WWWW", ".W.W.WW...WWW.W.W.W.WW.WW..WWW.WWWW.W.WWWW....W.W.WWWWWW.WW..WW.W..WW............W.....WWWWW.", "W.W.WWW.W.WW..W...WW...W..WW.WWWWW..W..WWWW..W..W...W........WWW.W.W...W..W.WW.WWWWW......WWW", "W.W...WW..W.WWWW..W...WWWWW.WWWWWWWWW.WWW.W..W..WW.W.W.W..WWWWW.......WWWWWW..WWWWW.W..W..WW.", "........W..W.W...W..WW.WW.W.W.W.W.W....W.WWW..W.WWWWW..WWW.W....W...WWW...W.WWW.W..W.WWWW.W..", "...WW..WWW.WWWW.W.W.WW.....W.W....W.W..W....W..W.WW..W.WWWWW..W..W..WW..W.....WW..W..W....W.W", "W.WW.WW..W.W......WW.W.W.WW...WW.W......WWWW..WWW..W..W..WWWW..WWWW.WWW.W.W..WW..WW..W.W.WWW.", "WWW..W...WWWWW.WW.W..W...WW.WWW.W......W.WW..W..........WWWW...W.....W.WW.W.W.W..W..WWW...WW.", "WW......WWWW.WWWW.W.W..W.WW.WW.W.W....W.WWW.W...W.WWWW..WWWW.WWW.....W..........W.W...WWW.WWW", "..WW...W.W..WW......W.WW.WWW.WWWWWW.WWWW..WWW...W.WWWW..W.......WW.W.WWWW....W...W.W..W..W..W", "WWWW.WW..WWW.W..W..W..........WWWWW.W.W..W.W.W.W..WWWW.WWW.WWWW.WW..W..W..WWW...W..WW.W.WWWW.", "W...W..WW..W.....WWW..W...W.WWWWW.W.W..WWW..W.WW.W.W.WW.W........WW.WWWW..W..W.WW.W..W..W....", "W.....W....WWWW...W.WW..WWWW.W.WWWWWW.W.W........WW.....WWWW.W.W..W.WWWWW...W.WW.W..WWW.WWW.W", "W..WWW.W...W...W.WWW.WWWW..WW.WW..W.W.WWW..WW.WW.W..WWW...W.......WW.W...WWW...W..W.WW.W...W.", "..WW.W........WW.WWW.....W.W..WWWWW......W.W...W..WW.W.WW.W.WW.....WW...WW.....WWWW.W.WWWW.W.", "WWW..WW.WW..W..W..WWW.W..W.W..WWWWWW.WW.W...WWW.WW.WWW.W..W.WW....WWWWWWWW..W..W...W.W.....WW", ".WWWW....WW.W..W...WW.WW.W...W.WW.WW.WWW..WWWW.WW...WWWW....W.W.WWW.WWW...W.W..WWWWW.WWWW.W..", "..W.WW...WW.W..WWWW.W.W.WWW...WW.WW....WW..WWW...W..WWWW.W.WWWWW...WWW.WW.WWW..WW..W.W..W...W", "WW.W..W.W.WWWW...WWW..WW....WW..W....W.....W.....W.WW..WW.WWWWWWW...WW.WW..WW.W...W..WW.WWW..", ".WW.WW.....W..W......W.WWWWW...W...WWWWW.WWWWWWW..WW.WW.W..WW.WW..W.W...W.W.WWW..WW.WW...WW..", "..W.WW.WW.W.W.WW..WW....WW.WW.....WWWW.WWWWWWWWW.WW.W..W.W.W.W..WW..W...W.W.WW.W...W.WW.WW.WW", ".W....WW...WWW.W..W.W....WW.WWW.W..WWW.WWW.W..W.W...WWWWWWWW.WWWW.W...........WWWWWW.W.WW..W.", ".WW....WWW...WWW..W.W.W.W.WWWWW.W...WW..WWW.WW.WW..WWWW.WWW...W..WWWWWWW.W....W.WW.WW...W.W..", "..W..W.W...W...WW.W.....WWWW........WWW..WW.WW.WW...WWW..W.WWWW..W.W..W.WWW..W.....WW.W..WWW.", "WWWWWW.WWWW..W.WW...W.WW.W..W..W..W..W.W..WW.W.W...W..WWW..W.WW...W.WWW..W..W..WW...W.WW.WWWW", "W.W...W.....W....W.WWWW.WW.....WW.W.WW....WW..W.WWW..W.WWWWW...WWWW.W..W....WWWW.W..WW...WWWW", ".....WW.W..W.....WW..WW....WW.WWW..WW..WWW.WW..W.W.W.W.....WW.W..W.W.WW....W.W....W.W.W..WW.W", "WWW..WWWWWWW.W..........WWW....WW...W.....W....WW...W...W..W...WWWWW.W......WW..W..W..W.W.WW.", ".WW.WWWW..W.W..W..WWW.......W..W.W..WWW.W.W..W.W.WWWWW..W.W....W..W.W.WW..WW.WW..W....WWW.W.W", "W.WW.W..W..WWW.W...WW.WWWW.WWW..W....WWWW.WW..WWW.WW.W.WW..W...W.WWWW.WW.WWWWW.WW..W.WW.W.W.W", "...W.....WWWW...W....W..WW....WWWWWWW.W..WWWW.WWW...W....W..WW.W...W.W.W......W.W.WW.WW...W.W", "...WWWWW.W.W..WW.W...W...W.W.W.W....W.W...W..W.WWWW.WWW..WW.WWW.W.W.W.WW.W...W.W...W.W.W...W.", "WWWWW.WW.W......W.W.W.W.W..W...WWWW.W.W...WWWWWWW.WWW....W.WW..W..WWWWWWW...W...W.WW..W..W.W.", ".W........W.W.....W.WWW...WWWW.WWWWWW....W..W.WWW...WWWW.W..W.WWW.W..W..WW.W.WWWW.W....WW.W.W", ".......WWW.W....W..WW..W..W....WWWWW.....WW..W.W.........WW.WW...WWWWWW..WW.W.WWWW...W...WW..", "WWW.W....W.W..W..W...WWW.W.W.WWWW........W.W..WW..W.....W..WWW.....WWWW..W..WWWW.WW..WWWWW.WW", ".WWW.W..W.WW...WW.WWWW.W.W.WWWW...WWW...W.W....W.W.W........W...WW.W.WW....W.W..W..W.WW......", "WWWW.WWW......W.......W.W..W.W.W.W.W.....WWW..W...WW..W....WW.WWWWWWWW...WW...W.WW..WW.WWW.W.", "...WWWW.WWW.WWW..WWWW..W.W..W.WWWW.....WWW..W...WWWWW.W...W..WW.WWWW.W.....W....WW.W.WWWW.W..", "W...W..WW.W.W..WW...WWW.WW..WW..W..WW..W..W..WWW..W...WWW.W.WW..WW.WW.WWWWWWWW.WW..W.WW..WW.W", ".W.....WWW..WWW.W..WWWWWW.WW..W.W...W.WWWWW..WWWWW.WWW....WW.W.WW...W.WWWWWWWWWWW.WWW....W..W", "WW...WWWW..W.W.WWWWW...W.WW..WW.WW.WWW.....WW....WWWWW..WWWW.....WWW.WW...WWWWWW.W..W.WW.W.W.", "WWW...W...W..W..WWW..W..W......W...W.W.WWWW...WW..WWW..WW.WW.WW......W..WWWWW..WWW.WWWWW...W.", ".W.W.W.W...WW.WW..WWW....WWWW..WW..W..W.W....W......W....WW..W.W.WWWWWWW..W.W..WWWW.WWWW.W.WW", ".W..WWWWWWW...WW...W..WW.WW..WWW.W.WW..WW.W.W..W.WW.W.WWWWW...WWWW.WW.WWWW.WWWWW...W..W.WW.W.", "W...WWWWW...WWW.....WW.WW.....WW..W.WW.WWW.W..W.W...WWWW.W.WW.W...W...W...WW.W.W.WW...W...W..", ".W..WWWWW....WW.WWWW.WWW.W.WW.WWW.W.WWW.WWWWW.WW.WWW.WWW.W...WWWWW.WW..W.W....WW.W.WWWW......", "W.WW.WWWW.WWWW.W.....WWW.WWWWW.W..WWWW.WW.....W.W..W..W.W.W....W.W.WW.WWWWWWWW.W..W....W...W.", ".WWW...W.WW....WW..WWW.WWWW.W...W....WWW.WWWWWWWWWW..WW....WWW...W.WWW.W.W..W.....W.WWW..W..W", "W.W.WW......W.W.W.W..W.W..W.WW.W..W.WWWWWW.....W..W....WWW.W.WWW.WWWWW..W.......W..WW..W.WW.W"]

let res = lakeCount(field)
console.log('res === 23', res)