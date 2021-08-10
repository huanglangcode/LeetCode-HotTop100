/*
 * @lc app=leetcode id=1418 lang=javascript
 *
 * [1418] Display Table of Food Orders in a Restaurant
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    orders.sort((a, b) => {
        return +a[1] - (+b[1])
    })
    let res = [];
    res[0] = ["Table"];
    let map = new Map();
    let foods = new Set();
    for (const order of orders) {
        foods.add(order[2]);

        if (map.has(order[1])) {
            let t = map.get(order[1]);
            if (t[order[2]]) {
                t[order[2]]++;
            } else {
                t[order[2]] = 1;
            }
        } else {
            let t = {};
            t[order[2]] = 1;
            map.set(order[1], t);
        }
    }
    let sortedFoods = [...foods].sort();
    res[0].push(...sortedFoods);
    map.forEach((value, key) => {
        let temp = new Array(res[0].length);
        temp[0] = key;
        for (let i = 1; i < res[0].length; i++) {
            temp[i] = !!value[res[0][i]] ? value[res[0][i]].toString() : '0';
        }
        res.push(temp);
    });
    return res;
};
// @lc code=end
displayTable([["ZtMFo", "3", "xun"], ["Bv", "13", "JI"], ["rIlmI", "3", "uX"], ["ISMqu", "13", "YRkd"], ["OTt", "5", "YRkd"], ["iSFg ", "10", "uX"], ["BSzzn", "4", "kIj"], ["wcQn", "2", "f R"], ["KzIo", "4", "JQkR"], ["olPvN", "17", "ibt"], ["HtN Y", "17", "xun"], ["uAtH", "7", "kIj"], ["qeinO", "9", "f R"], ["qqj", "17", "uX"], ["RxqaZ", "9", "OMEz"], ["qI", "6", "ibt"], ["dw", "2", "OMEz"]]);

/**
 * [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],
 *   ["3",          "0",        "2",        "1",        "0"],
 *   ["5",          "0",        "1",        "0",        "1"],
 *   ["10",         "1",        "0",        "0",        "0"]]
 */



/**
 * [["Table","JI","JQkR","OMEz","YRkd","f R","ibt","kIj","uX","xun"],["2","0","0","1","0","1","0","0","0","0"],["3","0","0","0","0","0","0","0","1","1"],["4","0","1","0","0","0","0","1","0","0"],["5","0","0","0","1","0","0","0","0","0"],["6","0","0","0","0","0","1","0","0","0"],["7","0","0","0","0","0","0","1","0","0"],["9","0","0","1","0","1","0","0","0","0"],["10","0","0","0","0","0","0","0","1","0"],["13","1","0","0","1","0","0","0","0","0"],["17","0","0","0","0","0","1","0","1","1"]]
 * 
 * 
 */