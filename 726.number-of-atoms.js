/*
 * @lc app=leetcode id=726 lang=javascript
 *
 * [726] Number of Atoms
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    let lowLetterReg = /[a-z]/;
    let upLetterReg = /[A-Z]/;
    let numStack = [];
    let letterStack = [];
    let numberReg = /\d/;
    let length = formula.length;
    let hash = {};
    let level = 1;
    for (let i = 0; i < length; ++i) {
        let c = formula[i];
        if (c === '(') {
            letterStack.push(level);
            level++;
        } else if (c === ')') {
            let times = '';
            while (numberReg.test(formula[++i])) {
                times += formula[i];
            }
            i -= 1;
            times = times || '1';
            let temp = [];
            while (true) {
                let letter = letterStack.pop();
                if (Number.isInteger(letter)) {
                    break;
                }
                temp.push(letter);
                temp.push(numStack.pop());
            }
            for (let i = 1; i < temp.length; i += 2) {
                temp[i] *= times;
                letterStack.push(temp[i - 1]);
                numStack.push(temp[i]);
            }
        } else if (upLetterReg.test(c || '')) {
            while (lowLetterReg.test(formula[++i] || '')) {
                c += formula[i];
            }
            i -= 1;
            letterStack.push(c);
            let t = '';
            while (numberReg.test(formula[++i])) {
                t += formula[i];
            }
            i -= 1;
            t = t || 1;
            numStack.push(+t);
        }
    }
    for (let i = 0; i < letterStack.length; i++) {
        if (hash[letterStack[i]]) {
            hash[letterStack[i]] += numStack[i];
        } else {
            hash[letterStack[i]] = numStack[i];
        }
    }
    let sorted = Object.entries(hash).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });
    let res = '';
    for (const arr of sorted) {
        if (arr[1] === 1) {
            res += arr[0];
        } else {
            res += arr.join("");
        }
    }
    console.log('res :>> ', res);
    return res;
};
// @lc code=end
// var formula1 = "((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14";
// "B18900Be18984C4200H5446He1386Li33894N50106O22638"
countOfAtoms("((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14");

// const formula = "K4(ON(SO3)2)2";
// "K4N2O14S4";
countOfAtoms("K4(ON(SO3)2)2");
countOfAtoms("H2O");
countOfAtoms("Mg(OH)2");
countOfAtoms("Be32");