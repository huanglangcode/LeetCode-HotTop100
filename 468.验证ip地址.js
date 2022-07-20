/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
    const ipv4 = queryIP.split('.')
    const ipv6 = queryIP.split(':')
    console.log('ipv6 :>> ', ipv6);
    if (ipv4.length === 4 || ipv6.length === 8) {
        if (ipv4.length === 4 && isIPV4(ipv4)) {
            return "IPv4"
        } else if (ipv6.length === 8 && isIPV6(ipv6)) {
            return "IPv6"
        }
    }
    return "Neither"
};
const isIPV4 = (arr) => {
    for (const str of arr) {
        const num = +str
        if (num.toString().length !== str.length) return false
        if (num < 0 || num > 255) return false
    }
    return true
}

const isIPV6 = (arr) => {
    for (const s of arr) {
        if (s.length > 4 || s.length == 0) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            const c = s.charCodeAt(i)
            if (!(('0'.charCodeAt(0) <= c && c <= '9'.charCodeAt(0)) || ('a'.charCodeAt(0) <= c && 'f'.charCodeAt(0) >= c) || ('A'.charCodeAt(0) <= c && c <= 'F'.charCodeAt(0)))) {
                return false
            }
        }
    }
    return true
}
// @lc code=end

var queryIP = "172.16.254.1"

queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"

validIPAddress(queryIP)