/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) {
        return "";
    }
    let hash = {};
    let needCount = t.length;
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]]) {
            hash[t[i]] += 1;
        } else {
            hash[t[i]] = 1;
        }
    }
    let ans = "";
    let tempHash = {};
    let currCount = 0;
    for (let i = 0; i < t.length; i++) {
        if (!hash[s[i]]) {
            continue;
        }
        tempHash[s[i]] = !!tempHash[s[i]] ? tempHash[s[i]] + 1 : 1;
        if (hash[s[i]] && hash[s[i]] >= tempHash[s[i]]) {
            currCount++;
        }
    }
    console.log('hash :>> ', hash);
    console.log('needCount :>> ', needCount);
    console.log('tempHash :>> ', tempHash);
    console.log('currCount :>> ', currCount);
    if (needCount === currCount) {
        return t;
    }
    let left = 0, right = t.length;
    while (right - left >= t.length - 1 && right < s.length) {
        if (!hash[s[right]]) {
            right++;
            continue;
        }
        tempHash[s[right]] = !!tempHash[s[right]] ? tempHash[s[right]] + 1 : 1;
        if (hash[s[right]] >= tempHash[s[right]]) {
            currCount++;
            if (currCount === needCount) {
                let tempAns = s.slice(left, right + 1);
                if (ans.length === 0 || tempAns.length < ans.length) {
                    ans = tempAns;
                }
                if (tempHash[s[left]]) {
                    tempHash[s[left]]--;
                }
                if (hash[s[left]] && tempHash[s[left]] < hash[s[left]]) {
                    currCount--;
                }
                left++;
                tempHash[s[right]]--;
                currCount--;
            } else {
                right++;
            }
        } else {
            right++;
        }
    }
    console.log('ans :>> ', ans);
    return ans;
};
// @lc code=end
minWindow("abc",
    "cba");



    // "twxpxwljvoxkpjjpfvccyikbbrpdsyvlxscuoofkecwtnfkvcnzbxkeabtdusyhrqklhaqreupakxkfzxgawqfwsaboszvlshwzhosojjotgyagygguzntrouhiweuomqptfjjqsxlbylhwtpssdlltgubczxslqjgxuqnmpynnlwjgmebrpokxjnbiltvbebyytnnjlcwyzignmhedwqbfdepqakrelrdfesqrumptwwgifmmbepiktxavhuavlfaqxqhreznbvvlakzeoomykkzftthoemqwliednfsqcnbexbimrvkdhllcesrlhhjsspvfupxwdybablotibypmjutclgjurbmhztboqatrdwsomnxnmocvixxvfiqwmednahdqhxjkvcyhpxxdmzzuyyqdjibvmfkmonfxmohhshpkhmntnoplphqyprveyfsmsxjfosmicdsjrieeytpnbhlsziwxnpmgoxneqbnufhfwrjbqcsdfarybzwaplmxckkgclvwqdbpumsmqkswmjwnkuqbicykoisqwoootrdpdvcuiuswfqmrkctsgrevcxnyncmivsxbpbxzxpwchiwtkroqisnmrbmefbmatmdknaklpgpyqlsccgunaibsloyqpnsibwuowebomrmcegejozypjzjunjmeygozcjqbnrpakdermjcckartbcppmbtkhkmmtcngteigjnxxyzaibtdcwutkvpwezisskfaeljmxyjwykwglqlnofhycwuivdbnpintuyhtyqpwaoelgpbuwiuyeqhbvkqlsfgmeoheexbhnhutxvnvfjwlzfmvpcghiowocdsjcvqrdmkcizxnivbianfpsnzabxqecinhgfyjrjlbikrrgsbgfgyxtzzwwpayapfgueroncpxogouyrdgzdfucfrywtywjeefkvtzxlw"