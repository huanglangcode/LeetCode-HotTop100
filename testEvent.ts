// // import { parse } from "@babel/parser";
// // import generate from "@babel/generator";

// // const a = "var a = 1;";
// // const b = "var b = 2;";
// // const astA = parse(a, { sourceFilename: "a.js" });
// // const astB = parse(b, { sourceFilename: "b.js" });
// // const ast = {
// //     type: "Program",
// //     body: [].concat(astA.program.body, astB.program.body),
// // };

// // const { code, map } = generate(
// //     ast,
// //     { sourceMaps: true },
// //     {
// //         "a.js": a,
// //         "b.js": b,
// //     }
// // );

// // console.log('code :>> ', code);
// // console.log('map :>> ', map);

// var need = [
//     {
//         type: "folder",
//         name: "文件夹1",
//         files: [
//             {
//                 type: "folder",
//                 name: "文件夹11",
//                 files: [
//                     { type: "file", name: "文件1", ext: "mrpa" },
//                     { type: "file", name: "文件2", ext: "json" }

//                 ]
//             }
//         ]
//     },
//     {
//         type: "folder",
//         name: "我是不那么的文件夹的名字",
//         files: [
//             {
//                 type: "folder",
//                 name: "我是不那么的文件夹的名字",
//                 files: [
//                     { type: "file", name: "文件1", ext: "mrpa" },
//                     { type: "file", name: "文件2", ext: "json" }

//                 ]
//             }
//         ]
//     },
//     {
//         type: "folder",
//         name: "我是超级超级长的文件夹的名字虽然也不算太长",
//         files: [
//             {
//                 type: "folder",
//                 name: "我是超级超级长的文件夹的名字虽然也不算太长",
//                 files: [
//                     { type: "file", name: "文件1", ext: "mrpa" },
//                     { type: "file", name: "文件2", ext: "json" }

//                 ]
//             }
//         ]
//     }
// ];

// // let aaaaaaaaaaaa = {
// //     "folder1": {
// //         "aaa.flow": {},
// //         "folder11": { "aaa.flow": {} }
// //     },
// //     "folder2": {
// //         "aaa.flow": {},
// //         "folder22": { "aaa.flow": {} }
// //     }
// // };
// var main = { entry: '/main.flow', type: 'file' };
// var a = { entry: '/folder1/aaa.flow', type: 'file' };
// var aa = { entry: '/folder1', type: 'folder' };
// var b = { entry: '/folder1/folder11/aaa.flow', type: 'file' };
// var bb = { entry: '/folder1/folder11', type: 'folder' };
// var c = { entry: '/folder2/aaa.flow', type: 'file' };
// var cc = { entry: '/folder2', type: 'folder' };
// var d = { entry: '/folder2/folder22/aaa.flow', type: 'file' };
// var dd = { entry: '/folder2/folder22', type: 'folder' };
// var e = { entry: '/folder3/aaa.flow', type: 'file' };
// var ee = { entry: '/folder3', type: 'folder' };
// var f = { entry: '/folder4/folder44/aaa.flow', type: 'file' };
// var ff = { entry: '/folder4/folder44', type: 'folder' };
// // var arr = [main, a, b, c, d, e, f, aa, bb, cc, dd, ee, ff];
// let node = {};
// arr.forEach(ele => {
//     var curr = ele.entry.split('/');
//     let p = node;
//     curr.forEach((ele) => {
//         if (ele) {
//             if (p[ele] === undefined) {
//                 p[ele] = {};
//             }
//             p = p[ele];
//         }
//     });
//     //@ts-ignore
//     p.type = ele.type;
// });

// const helper = (node) => {
//     let temp = [];
//     for (let prop in node) {
//         if (node[prop].type === 'file') {
//             temp.push({ type: "file", name: prop, ext: "flow" });
//         }
//         if (node[prop].type === 'folder') {
//             let innerObj = { type: "folder", name: prop, files: [] };
//             innerObj.files = helper(node[prop]);
//             temp.push(innerObj);
//         }
//     }
//     return temp;
// };

// console.log('node :>> ', JSON.stringify(node));
// // let nodeArr = Object.keys(node);
// // console.log('nodeArr :>> ', nodeArr);
// let result = helper(node);
// // for (let prop in node) {
// //     if (node[prop].type === 'file') {
// //         result.push({ type: "file", name: prop, ext: "flow" });
// //     }
// //     if (node[prop].type === 'folder') {
// //         let innerObj = { type: "folder", name: prop, files: [] };
// //         innerObj.files = helper(node[prop]);
// //         result.push(innerObj);
// //     }
// // }
// console.log('JSON.stringify(result) :>> ', JSON.stringify(result));

// type FileId = string;
// type PackageVersion = string;
// type PackageVersionRange = string;
// interface IPackageConfig {
//     name: string; // 包名称
//     version: PackageVersion; // 包版本号
//     manual: string; // 包说明
//     description: string; // 包描述
//     main: string; // 主入口 例如: `/main.flow`
//     dependencies: {      // 包依赖版本
//         [name: string]: PackageVersionRange
//     };
//     engines: {           // 包引擎版本
//         "cyclone-designer": PackageVersionRange;
//         "cyclone-server": PackageVersionRange;
//         "executor-runtime": PackageVersionRange;
//     };
// }
// let obj = {
// };
// console.log('obj :>> ', obj instanceof IPackageConfig);

// let q = child_process.spawn("powershell.exe", ['[System.IO.Directory]::GetFiles("\\\\.\\\\pipe\\\\") | findstr mojo.4472.24656.11'])
// q.stdout.on('data', (chunk) => {
//     console.log('stdout :>> ', chunk.toString());
// })

// var obj2 = [
//     {
//         "processType": "/技术部/flow2.flow",
//         "methodName": "/技术部/flow2.flow",
//         "displayName": "功能2",
//     },
//     {
//         "processType": "/技术部/flow22.flow",
//         "methodName": "/技术部/flow22.flow",
//         "displayName": "功能22",
//     },
//     {
//         "processType": "/企划部/flow1.flow",
//         "methodName": "/企划部/flow1.flow",
//         "displayName": "功能1",
//     },
//     {
//         "processType": "/技术部/技术一部/flow3.flow",
//         "methodName": "/技术部/技术一部/flow3.flow",
//         "displayName": "功能3",
//     },
//     {
//         "processType": "/技术部/技术一部/技术一部 - 1组/flow4.flow",
//         "methodName": "/技术部/技术一部/技术一部 - 1组/flow4.flow",
//         "displayName": "功能4",
//     },
//     {
//         "processType": "/技术部/技术一部/技术一部 - 2组/flow5.flow",
//         "methodName": "/技术部/技术一部/技术一部 - 2组/flow5.flow",
//         "displayName": "功能5",
//     },
//     {
//         "processType": "/技术部/技术二部/flow6.flow",
//         "methodName": "/技术部/技术二部/flow6.flow",
//         "displayName": "功能5",
//     },
//     {
//         "processType": "/技术部/flow222.flow",
//         "methodName": "/技术部/flow222.flow",
//         "displayName": "功能222",
//     },
//     {
//         "processType": "/root.flow",
//         "methodName": "/root.flow",
//         "displayName": "root",
//     },
//     {
//         "processType": "/main.flow",
//         "methodName": "/main.flow",
//         "displayName": "main",
//     },
//     {
//         "processType": "/folder1/main.flow",
//         "methodName": "/folder1/main.flow",
//         "displayName": "main",
//     },

//     {
//         "processType": "/folder1/main2.flow",
//         "methodName": "/folder1/main2.flow",
//         "displayName": "main2",
//     },
// ]
// function generateSchemaTree(processList: any[]) {
//     processList.sort((a, b) => {
//         return b.processType.split('/').length - a.processType.split('/').length
//     })
//     let node: any = {};
//     processList.forEach((process) => {
//         let tags = process.processType.split("/").slice(1);
//         let p = node;
//         tags.forEach((ele: string) => {
//             if (p[ele] === undefined) {
//                 p[ele] = {};
//             }
//             p = p[ele];
//         });
//         p.content = process
//     });
//     console.log('node :>> ', JSON.stringify(node));
//     let set = new Set()
//     const helper = (node: any) => {
//         let temp: Array<any> = [];
//         for (let prop in node) {
//             const curValue = node[prop];
//             let innerObj: any = { displayName: prop, subMenuList: [], processList: [] };
//             if (!curValue.content) {
//                 for (const innerProp in curValue) {
//                     if (Object.prototype.hasOwnProperty.call(curValue, innerProp)) {
//                         const element = curValue[innerProp];
//                         if (element && element.content && !set.has(element.content.processType)) {
//                             set.add(element.content.processType)
//                             innerObj.processList.push(element.content)
//                         }
//                     }
//                 }
//                 innerObj.subMenuList = helper(node[prop]);
//                 temp.push(innerObj);
//             } else {
//                 if (!set.has(curValue.content.processType)) {
//                     set.add(curValue.content.processType)
//                     temp.push(curValue.content);
//                 }
//             }
//         }
//         return temp;
//     };
//     let resArr = helper(node);
//     return resArr
// };

// let p = generateSchemaTree(obj2)
// console.log('p :>> ', JSON.stringify(p));

console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve("5");
  }).then(function (v) {
    console.log(v);
  });
});
setImmediate(() => {
  console.log("5.1");
});
process.nextTick(function () {
  console.log("6");
});

setImmediate(() => {
  console.log("6.1");
});
new Promise(function (resolve) {
  console.log("7");
  resolve("8");
}).then(function (e) {
  console.log(e);
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve(3);
  }).then(function () {
    console.log("12");
  });
});
