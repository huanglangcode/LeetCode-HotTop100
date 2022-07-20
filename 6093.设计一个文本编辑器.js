class TextEditor {
    constructor() {
        this.text = new Array()
        this.cursorIdx = 0
    }
    /**
     * @param {string} text
     * @return {void}
     */
    addText(text) {
        this.text.splice(this.cursorIdx, 0, ...text)
        this.cursorIdx += text.length
    }
    /**
     * @param {number} k
     * @return {number}
     */
    deleteText(k) {
        let length = this.text.length
        if (this.cursorIdx >= k) {
            this.text.splice(this.cursorIdx - k, k)
            this.cursorIdx -= (length - this.text.length)
        } else {
            this.text.splice(0, this.cursorIdx)
            this.cursorIdx = 0
        }
        return length - this.text.length
    }
    /**
     * @param {number} k
     * @return {string}
     */
    cursorLeft(k) {
        if (this.cursorIdx - k < 0) {
            this.cursorIdx = 0
        } else {
            this.cursorIdx -= k
        }
        return this.cursorIdx > 10 ? this.text.slice(this.cursorIdx - 10, this.cursorIdx).join("") : this.text.slice(0, this.cursorIdx).join("")
    }
    /**
     * @param {number} k
     * @return {string}
     */
    cursorRight(k) {
        if (this.cursorIdx + k > this.text.length) {
            this.cursorIdx = this.text.length
        } else {
            this.cursorIdx += k
        }
        return this.cursorIdx > 10 ? this.text.slice(this.cursorIdx - 10, this.cursorIdx).join("") : this.text.slice(0, this.cursorIdx).join("")
    }
}

const textEditor = new TextEditor(); // 当前 text 为 "|" 。（'|' 字符表示光标）
textEditor.addText("leetcode"); // 当前文本为 "leetcode|" 。
textEditor.deleteText(4); // 返回 4
// 当前文本为 "leet|" 。
// 删除了 4 个字符。
textEditor.addText("practice"); // 当前文本为 "leetpractice|" 。
textEditor.cursorRight(3); // 返回 "etpractice"
// 当前文本为 "leetpractice|". 
// 光标无法移动到文本以外，所以无法移动。
// "etpractice" 是光标左边的 10 个字符。
textEditor.cursorLeft(8); // 返回 "leet"
// 当前文本为 "leet|practice" 。
// "leet" 是光标左边的 min(10, 4) = 4 个字符。
textEditor.deleteText(10); // 返回 4
// 当前文本为 "|practice" 。
// 只有 4 个字符被删除了。
textEditor.cursorLeft(2); // 返回 ""
// 当前文本为 "|practice" 。
// 光标无法移动到文本以外，所以无法移动。
// "" 是光标左边的 min(10, 0) = 0 个字符。
textEditor.cursorRight(6);
 // 返回 "practi"
// 当前文本为 "practi|ce" 。
// "practi" 是光标左边的 min(10, 6) = 6 个字符。
