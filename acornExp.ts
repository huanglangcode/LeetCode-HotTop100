import acorn, { getLineInfo, Parser } from "acorn";
let parser = new Parser({ ecmaVersion: 2020 }, "function main(a,b){return a + b;}");
let parsedTree = parser.parse();

console.log('parsedTree.body :>> ', parsedTree);

let lintInfo = getLineInfo("function main(a,b){return a + b;}", 0);
console.log('lintInfo :>> ', lintInfo);

