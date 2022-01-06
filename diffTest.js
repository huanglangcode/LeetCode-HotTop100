var jsonDiff = require('json-diff')

let res = jsonDiff.diffString({ foo: 'bar', processList: [{ processType: '/flow1.flow' }, { processType: '/flow2.flow' }, { processType: '/flow3.flow' }] }, { foo: 'baz', processList: [{ processType: 'folder1/flow2.flow' }, { processType: 'folder1/flow1.flow' }] })
console.log('res :>> ', res);
// let res = Diff.diffJson(JSON.stringify({ a: 1, b: 2 }), JSON.stringify({ a: 2, b: 3 }), { ignoreWhitespace: true })
// console.log('res :>> ', res);