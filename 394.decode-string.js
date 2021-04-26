/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // 3[a] -> aaa 2[ab] -> abab
    let result = ''
    let numStack = []
    let strStack = []
    let i = 0
    while (i < s.length) {
        if (Number.isInteger(+s[i])) {
            console.log('s[i] :>> ', s[i]);
            curr = s[i]
            let nextI = i
            while (Number.isInteger(+s[++nextI])) {
                curr += s[nextI]
            }
            numStack.push(curr)
            i = nextI - 1 === i ? i + 1 : nextI
        } else if (s[i] !== ']') {
            strStack.push(s[i])
            i++
        } else {
            console.log('出栈 :>> ', numStack, strStack); // [ '[', 'a', '[', 'b', 'c' ]
            let currNum = numStack.pop()
            let currStr = strStack.pop()
            let currSubStr = ''
            do {
                currSubStr = currStr + currSubStr
                currStr = strStack.pop()
            } while (currStr !== '[');
            let sub = ''
            for(let i = 0; i < currNum; i++){
                sub += currSubStr
            }
            // subStr再入栈
            console.log('sub :>> ', sub);
            strStack.push(sub)
            console.log('zzzz:', sub, strStack, numStack)
            i++
        }
    }
    console.log('strStack :>> ', strStack);
    return strStack.join('')
};

var s = "2[abc]3[cd]ef"
decodeString(s)