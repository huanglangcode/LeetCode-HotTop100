/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
// var canReach = function (s, minJump, maxJump) {
//     let flag = false;
//     let hash = {};
//     const helper = (idx) => {
//         if (idx === s.length - 1) {
//             flag = true;
//         }
//         for (let i = idx + minJump; i <= idx + maxJump && i < s.length; i++) {
//             if (hash[i]) {
//                 break;
//             }
//             if (s[i] === "0") {
//                 hash[i] = true;
//                 helper(i);
//             }
//         }
//     };
//     helper(0);
//     return flag;
// };


// console.log("res :>> ", res);

var arr = [1, 2, 2, 2, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 13, 20, 20, 25];
const searchIndex = (arr, target, l) => {
    let r = arr.length - 1;
    while (l < r) {
        const mid = l + (r - l >> 1);
        const curr = arr[mid];
        if (curr < target) {
            l = mid + 1;
        } else if (curr >= target) {
            r = mid;
        }
    }
    console.log('l :>> ', l);
    return l;
};

searchIndex(arr, 3, 0);