/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let state = 0;
    // 当前state + char 推断下一个state
    // 0-9 . +/- e/E ""
    // 0 + Number -> 1
    // 1 + 
    const getType = (c) => {
        switch (c) {
            case "+":
            case "-": return 'symbol';
            case ".": return 'dot';
            case "e":
            case "E": return 'E';
            default:
                let code = c.charCodeAt();
                if (code >= 48 && code <= 57) {
                    return 'int';
                } else {
                    return 'other';
                }
        }
    };
    const getState = (state, type) => {
        let stateMap = [
            //0
            { 'symbol': 1, 'dot': 2, 'int': 3 },
            //1
            { 'int': 3, 'dot': 2 },
            //2
            { 'int': 4 },
            //3
            { 'int': 3, 'dot': 4, 'E': 5 },
            //4
            { 'int': 4, 'E': 5 },
            //5
            { 'symbol': 6, 'int': 7 },
            //6
            { 'int': 7 },
            //7
            { 'int': 7 },
        ];
        return stateMap[state][type];
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let type = getType(char);
        console.log('type, state :>> ', type, state);
        if (type === 'other') {
            console.log('false11 :>> ', false);
            return false;
        }
        state = getState(state, type);
        if (!state) {
            console.log('false22 :>> ', false);
            return false;
        }
    }
    console.log('finalState :>> ', state);
    const res = state === 3 || state === 4 || state === 7;
    console.log('res :>> ', res);
    return res;
};
// @lc code=end

// isNumber("-123.456e789");
isNumber("369.E-10");