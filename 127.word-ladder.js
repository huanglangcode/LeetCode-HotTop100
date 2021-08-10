/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    let queue = [beginWord];
    let step = 1;
    while (queue.length) {
        let length = queue.length;
        step++;
        while (length--) {
            let curr = queue.pop();
            for (let i = 0; i < wordList.length; i++) {
                if (!canTranslate(curr, wordList[i])) {
                    continue;
                }
                if (wordList[i] === endWord) {
                    console.log('step :>> ', step);
                    return step;
                }
                queue.unshift(wordList[i]);
                wordList.splice(i, 1);
                i -= 1;
            }
        }
    }
    return 0;
};
// @lc code=end

const canTranslate = (word1, word2) => {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            if (diff) { return false; }
            diff++;
        }
    }
    return diff === 1;
};

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);