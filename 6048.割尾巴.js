/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    let arr = new Array(1e6 + 1), res = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < cards.length; i++) {
        if (Number.isInteger(arr[cards[i]])) {
            res = Math.min(res, i - arr[cards[i]] + 1)
        }
        arr[cards[i]] = i
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res
};
var cards = [3, 4, 2, 3, 4, 7]
let res = minimumCardPickup(cards)
console.log('res :>> ', res);