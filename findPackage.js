const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const ENUM_PROJECT_CONFIG = 'package.json';

// var origin = path.resolve("recentProjects/project1/aaa.flow");
// console.log('origin :>> ', origin);

// const helper = (dist) => {
//     let hasConfig = findConfigRecursive(dist);
//     console.log('hasConfig :>> ', hasConfig);
//     if (hasConfig) {
//         // open Package and return
//     } else {
//         // Create the project in the current directory
//     }
// };

// const findConfigRecursive = (dist) => {
//     let dir = path.dirname(dist);
//     if (dir === dist) {
//         return false;
//     }
//     let fileArr = fs.readdirSync(dir);
//     if (fileArr.findIndex(ele => ele === ENUM_PROJECT_CONFIG) !== -1) {
//         try {
//             let configObj = JSON.parse(fs.readFileSync(path.join(dir, ENUM_PROJECT_CONFIG), { encoding: 'utf-8' }));
//             return configObj instanceof Date;
//         } catch (error) {
//             console.log('config exist but invalid');
//             return false;
//         }
//     }
//     let res = findConfigRecursive(dir);
//     return res;
// };

// helper(origin);

const srcArr = ["D:\\Temp\\example2\\main.flow", "D:\\Temp\\example2\\main - 副本.flow", "D:\\Temp\\example2\\main - 副本 (1).flow"];
const dest = "D:\\Temp\\example1";

function initCopyName(srcArr, dest) {
    // basename.txt -> basename - 副本.txt
    // basename - 副本.txt -> basename - 副本 (1).txt
    const existFileArr = fs.readdirSync(dest);
    console.log('existFileArr :>> ', existFileArr);
    srcArr.forEach(ele => {
        console.log('existFileArr.indexOf(path.basename(ele)); :>> ', existFileArr.indexOf(path.basename(ele)));
        existFileArr.push(path.basename(ele));
    });
    let destArr = [];
    for (const src of srcArr) {
        const extName = path.extname(src);
        const basename = path.basename(path.resolve(src), extName);
        let repeatNameArr = existFileArr.filter(ele => ele.startsWith(`${basename} - 副本`));
        if (repeatNameArr.length) {
            let maxIdx = 0;
            repeatNameArr.forEach(ele => {
                let tempIdx = '';
                let idx = ele.indexOf("- 副本 (") + 6;
                while (Number.isInteger(parseInt(ele[idx]))) {
                    tempIdx += ele[idx];
                    idx++;
                }
                if (parseInt(tempIdx)) {
                    maxIdx = Math.max(maxIdx, parseInt(tempIdx));
                }
            });
            // return `${path.resolve(src, "..")}\\${basename} - 副本 (${++maxIdx})${extName}`;
            destArr.push(path.join(dest, `${basename} - 副本 (${++maxIdx})${extName}`));
        } else {
            // return `${path.resolve(src, "..")}\\${basename} - 副本${extName}`;
            destArr.push(path.join(dest, `${basename} - 副本${extName}`));
        }
    }
    return destArr;
}

var res = initCopyName(srcArr, dest);
console.log('res :>> ', res);