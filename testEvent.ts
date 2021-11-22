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

import child_process from "child_process"

// let q = child_process.spawn("powershell.exe", ['[System.IO.Directory]::GetFiles("\\\\.\\\\pipe\\\\") | findstr mojo.4472.24656.11'])
// q.stdout.on('data', (chunk) => {
//     console.log('stdout :>> ', chunk.toString());
// })
let res = child_process.execSync("dir \\\\.\\pipe\\\\ | findstr INQQ")
console.log('res :>> ', res.toString());




var obj = {
    "schema1": {
        "$schema": "./$schema.json",
        "id": "project1",
        "displayName": "工商银行",
        "moduleName": "project1",
        "tag": ["银行项目"],
        "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
        "color": "#539AEC",
        "processList": [
            {
                "processType": "/flow1.flow",
                "methodName": "/flow1.flow",
                "displayName": "功能1",
                "tags": ["人事部"],
                "alias": []
            },
            {
                "processType": "/flow2.flow",
                "methodName": "/flow2.flow",
                "displayName": "功能2",
            },
            {
                "processType": "/flow3.flow",
                "methodName": "/flow3.flow",
                "displayName": "功能3",
                "tags": ["人事部"],
            },
            {
                "processType": "/flow4.flow",
                "methodName": "/flow4.flow",
                "displayName": "功能4",
                "tags": ["行政部"],
            },


        ]
    },
    "schema2": {
        "$schema": "./$schema.json",
        "id": "project2",
        "displayName": "农业银行",
        "moduleName": "project2",
        "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
        "color": "#539AEC",
        "processList": [
            {
                "processType": "/flow1.flow",
                "methodName": "/flow1.flow",
                "displayName": "功能1",
                "tags": ["企划部"],
            },
            {
                "processType": "/flow2.flow",
                "methodName": "/flow2.flow",
                "displayName": "功能2",
                "tags": ["技术部"],
            },
            {
                "processType": "/flow3.flow",
                "methodName": "/flow3.flow",
                "displayName": "功能3",
                "tags": ["技术部", "技术一部"],
            },
        ]
    },
    "schema3": {
        "id": "project3",
        "displayName": "建设银行",
        "moduleName": "project3",
        "tag": ["银行项目"],
        "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
        "color": "#539AEC",
        "processList": [
            {
                "processType": "/flow1.flow",
                "methodName": "/flow1.flow",
                "displayName": "功能1",
                "tags": ["人事部"],
                "alias": []
            },
            {
                "processType": "/flow2.flow",
                "methodName": "/flow2.flow",
                "displayName": "功能2",
            },
            {
                "processType": "/flow3.flow",
                "methodName": "/flow3.flow",
                "displayName": "功能3",
                "tags": ["人事部"],
            },
            {
                "processType": "/flow4.flow",
                "methodName": "/flow4.flow",
                "displayName": "功能4",
                "tags": ["行政部"],
            },
        ]
    },
}