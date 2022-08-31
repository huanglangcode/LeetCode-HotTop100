/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let map = new Map()
    let idx = 0
    for (const char of key) {
        if (!map.has(char) && char !== " ") {
            map.set(char, idx++)
        }
    }
    let res = ""
    for (const char of message) {
        if (map.has(char)) {
            res += String.fromCharCode(97 + map.get(char))
        } else {
            res += " "
        }
    }
    return res
};


var key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"

let res = decodeMessage(key, message)
console.log('res :>> ', res);