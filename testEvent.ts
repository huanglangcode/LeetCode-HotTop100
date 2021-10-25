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