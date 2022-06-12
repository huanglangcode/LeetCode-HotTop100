/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    let c = data.map(ele => ele.toString(2).padStart(8, '0'))
    console.log(c)
    for (let i = 0; i < data.length; i++) {
        const curr = data[i].toString(2).padStart(8, '0')
        console.log(i, curr)
        if (curr.startsWith('0')) {
            continue
        } else {
            let cnt = 0
            while (curr[cnt] === '1') {
                cnt++
            }
            if (cnt > 4 || cnt < 2) {
                return false
            }
            for (let j = i + 1; j < i + cnt; j++) {
                if (j >= data.length) return false
                console.log(i, cnt, j, curr, data[j].toString(2).padStart(8, '0'))
                if (!data[j].toString(2).padStart(8, '0').startsWith('10')) {
                    return false
                }
            }
            i += cnt - 1
        }
    }
    return true
};

validUtf8([240, 162, 138, 147, 145])