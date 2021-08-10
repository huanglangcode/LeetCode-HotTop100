// const assert = require('assert');
// const child_process = require('child_process');

// const subprocess = child_process.spawn('ls', {
//   stdio: [
//     0, // 使用父进程的 stdin 用于子进程。
//     'pipe', // 把子进程的 stdout 通过管道传到父进程 。
//     fs.openSync('err.out', 'w') // 把子进程的 stderr 定向到一个文件。
//   ]
// });

// assert.strictEqual(subprocess.stdio[0], null);
// assert.strictEqual(subprocess.stdio[0], subprocess.stdin);

// assert(subprocess.stdout);
// assert.strictEqual(subprocess.stdio[1], subprocess.stdout);

// assert.strictEqual(subprocess.stdio[2], null);
// assert.strictEqual(subprocess.stdio[2], subprocess.stderr);

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });

// const { spawn } = require('child_process');
// const ps = spawn('ps', ['ax']);
// const grep = spawn('grep', ['ssh']);

// ps.stdout.on('data', (data) => {
//     console.log('ps.stdout.data :>> \r\n', data.toString());
//     grep.stdin.write(data, (err)=>{
//         console.log('write error :>> ', err);
//     });
// });

// ps.stderr.on('data', (data) => {
//     console.error(`ps 的 stderr: ${data}`);
// });

// ps.on('close', (code) => {
//     if (code !== 0) {
//         console.log(`ps 进程退出，退出码 ${code}`);
//     }
//     grep.stdin.end();
// });

// grep.stdout.on('data', (data) => {
//     console.log('grep.stdout: ', data.toString());
// });

// grep.stderr.on('data', (data) => {
//     console.error(`grep 的 stderr: ${data}`);
// });

// grep.on('close', (code) => {
//     if (code !== 0) {
//         console.log(`grep 进程退出，退出码 ${code}`);
//     }
// });
// interface Exception {
//     type: string;
//     message: string;
//     extraInfo?: any;
// }

// type IProcessOutput = {
//     err: Exception,
//     data: undefined
// } | {
//     err: undefined,
//     data: any[]
// }

// function IProcessResponse(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     let originalMethod = descriptor.value;
//     descriptor.value = async function (...args: any[]): Promise<IProcessOutput> {
//         let result = await originalMethod.apply(this, args);
//         // if (typeof result === "object" && Array.isArray(result)) {

//         // }
//         return { err: undefined, data: [result + "hello world"] };
//     };
// }

// class Task {
//     @IProcessResponse
//     public async runTask(arg: any): Promise<any> {
//         console.log("runTask invoked, args: " + arg);
//         return "the task result";
//     }
// }

// (async () => {
//     console.log("-- creating an instance --");
//     let task = new Task();
//     console.log("-- invoking Task#runTask --");
//     let result = await task.runTask("task input");
//     console.log("result lalala: " + result);
// })();


// var element = { "application": { "matchType": 0, "text": "explorer.exe", "tick": true, "varName": "", "varValue": "" }, "category": "WINCONTROL", "height": 40, "image": "iVBORw0QmCC", "instruction": "clickControl", "parameter": { "col": { "tick": true, "value": 0, "varName": "", "varValue": "" }, "confidence": 0.75, "content": { "matchType": 0, "text": "", "tick": true, "varName": "", "varValue": "" }, "itemIndex": { "tick": false, "value": 0, "varName": "", "varValue": "" }, "limit": { "matchType": 0, "text": "", "tick": true, "varName": "", "varValue": "" }, "row": { "tick": true, "value": 0, "varName": "", "varValue": "" } }, "record": { "control": [{ "command": { "instruction": "window", "parameter": null }, "environment": { "screenDPI": 96, "screenHeight": 1440, "screenWidth": 2560 }, "fullNameFormat": "winClass,name", "property": [{ "key": "category", "match": 0, "value": "WINCONTROL", "weight": 100 }, { "key": "winClass", "match": 0, "value": "Shell_TrayWnd", "weight": 100 }, { "key": "name", "match": 0, "value": "任务栏", "weight": 100 }, { "key": "role", "match": 0, "value": "00000009", "weight": 100 }, { "key": "width", "match": 0, "value": "2560", "weight": 100 }, { "key": "height", "match": 0, "value": "40", "weight": 100 }, { "key": "left", "match": 0, "value": "0", "weight": 100 }, { "key": "top", "match": 0, "value": "0", "weight": 100 }, { "key": "index", "match": 0, "value": "", "weight": 0 }, { "key": "value", "match": 0, "value": "", "weight": 0 }, { "key": "state", "match": 0, "value": "00100000", "weight": 0 }, { "key": "defaultAction", "match": 0, "value": "", "weight": 0 }, { "key": "description", "match": 0, "value": "", "weight": 0 }, { "key": "help", "match": 0, "value": "", "weight": 0 }, { "key": "keyboardShortcut", "match": 0, "value": "", "weight": 0 }, { "key": "style", "match": 0, "value": "96000000", "weight": 0 }, { "key": "exStyle", "match": 0, "value": "e0000888", "weight": 0 }, { "key": "location", "match": 0, "value": "0,1400", "weight": 0 }] }, { "command": { "instruction": "clickControl", "parameter": { "mouse": "left", "x": 21, "y": 26 } }, "environment": { "screenDPI": 96, "screenHeight": 1440, "screenWidth": 2560 }, "fullNameFormat": "winClass,name", "property": [{ "key": "category", "match": 0, "value": "WINCONTROL", "weight": 100 }, { "key": "winClass", "match": 0, "value": "MSTaskListWClass", "weight": 100 }, { "key": "name", "match": 0, "value": "计算器", "weight": 100 }, { "key": "role", "match": 0, "value": "0000002b", "weight": 100 }, { "key": "width", "match": 0, "value": "49", "weight": 100 }, { "key": "height", "match": 0, "value": "40", "weight": 100 }, { "key": "left", "match": 0, "value": "197", "weight": 100 }, { "key": "top", "match": 0, "value": "0", "weight": 100 }, { "key": "index", "match": 0, "value": "", "weight": 0 }, { "key": "value", "match": 0, "value": "", "weight": 0 }, { "key": "state", "match": 0, "value": "00100080", "weight": 0 }, { "key": "defaultAction", "match": 0, "value": "按", "weight": 0 }, { "key": "description", "match": 0, "value": "", "weight": 0 }, { "key": "help", "match": 0, "value": "", "weight": 0 }, { "key": "keyboardShortcut", "match": 0, "value": "", "weight": 0 }, { "key": "style", "match": 0, "value": "56000000", "weight": 0 }, { "key": "exStyle", "match": 0, "value": "c0000800", "weight": 0 }, { "key": "location", "match": 0, "value": "197,1400", "weight": 0 }] }], "image": null, "pattern": "normalControl" }, "scrapType": 1, "text": { "matchType": 0, "text": "计算器", "tick": true, "varName": "", "varValue": "" }, "title": { "matchType": 0, "text": "任务栏", "tick": false, "varName": "", "varValue": "" }, "type": { "matchType": 0, "text": "PushButton", "tick": true, "varName": "", "varValue": "" }, "valueParamList": [{}, {}], "width": 49 };

// function __is_string(v) {
//     return (v === undefined || v === null || typeof v === "string");
// }

// function __is_number(v) {
//     return (v === undefined || v === null || typeof v === "number");
// }

// function __is_boolean(v) {
//     return (v === undefined || v === null || typeof v === "boolean");
// }

// function __is___struct_4(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["matchType"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["matchType"])) {
//         return false;
//     }
//     if (v["text"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["text"])) {
//         return false;
//     }
//     if (v["tick"] === undefined) {
//         return false;
//     }
//     if (!__is_boolean(v["tick"])) {
//         return false;
//     }
//     if (v["varName"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["varName"])) {
//         return false;
//     }
//     if (v["varValue"] === undefined) {
//         return false;
//     }
//     return true;
// }

// function __is___struct_6(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["tick"] === undefined) {
//         return false;
//     }
//     if (!__is_boolean(v["tick"])) {
//         return false;
//     }
//     if (v["value"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["value"])) {
//         return false;
//     }
//     if (v["varName"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["varName"])) {
//         return false;
//     }
//     if (v["varValue"] === undefined) {
//         return false;
//     }
//     return true;
// }

// function __is___struct_5(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["col"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_6(v["col"])) {
//         return false;
//     }
//     if (v["confidence"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["confidence"])) {
//         return false;
//     }
//     if (v["content"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["content"])) {
//         return false;
//     }
//     if (v["itemIndex"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_6(v["itemIndex"])) {
//         return false;
//     }
//     if (v["limit"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["limit"])) {
//         return false;
//     }
//     if (v["row"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_6(v["row"])) {
//         return false;
//     }
//     return true;
// }

// function __is___struct_9(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["instruction"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["instruction"])) {
//         return false;
//     }
//     if (v["parameter"] === undefined) {
//         return false;
//     }
//     return true;
// }

// function __is___struct_10(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["screenDPI"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["screenDPI"])) {
//         return false;
//     }
//     if (v["screenHeight"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["screenHeight"])) {
//         return false;
//     }
//     if (v["screenWidth"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["screenWidth"])) {
//         return false;
//     }
//     return true;
// }

// function __is___struct_11(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["key"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["key"])) {
//         return false;
//     }
//     if (v["match"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["match"])) {
//         return false;
//     }
//     if (v["value"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["value"])) {
//         return false;
//     }
//     if (v["weight"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["weight"])) {
//         return false;
//     }
//     return true;
// }

// function __is_array___struct_11(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (!Array.isArray(v)) {
//         return false;
//     }
//     for (let e of v) {
//         if (!__is___struct_11(e)) {
//             return false;
//         }
//     }
//     return true;
// }

// function __is___struct_8(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["command"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_9(v["command"])) {
//         return false;
//     }
//     if (v["environment"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_10(v["environment"])) {
//         return false;
//     }
//     if (v["fullNameFormat"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["fullNameFormat"])) {
//         return false;
//     }
//     if (v["property"] === undefined) {
//         return false;
//     }
//     if (!__is_array___struct_11(v["property"])) {
//         return false;
//     }
//     return true;
// }

// function __is_array___struct_8(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (!Array.isArray(v)) {
//         return false;
//     }
//     for (let e of v) {
//         if (!__is___struct_8(e)) {
//             return false;
//         }
//     }
//     return true;
// }

// function __is___struct_7(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["control"] === undefined) {
//         return false;
//     }
//     if (!__is_array___struct_8(v["control"])) {
//         return false;
//     }
//     if (v["image"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["image"])) {
//         return false;
//     }
//     if (v["pattern"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["pattern"])) {
//         return false;
//     }
//     return true;
// }

// function __is_object___struct_12(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (typeof v !== "object" || Array.isArray(v)) {
//         return false;
//     }
//     for (let k of Object.keys(v)) { }
//     return true;
// }

// function __is_array_object___struct_12(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (!Array.isArray(v)) {
//         return false;
//     }
//     for (let e of v) {
//         if (!__is_object___struct_12(e)) {
//             return false;
//         }
//     }
//     return true;
// }

// function __is___struct_3(v) {
//     if (v === undefined || v === null) {
//         return true;
//     }
//     if (v["application"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["application"])) {
//         return false;
//     }
//     if (v["category"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["category"])) {
//         return false;
//     }
//     if (v["height"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["height"])) {
//         return false;
//     }
//     if (v["image"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["image"])) {
//         return false;
//     }
//     if (v["instruction"] === undefined) {
//         return false;
//     }
//     if (!__is_string(v["instruction"])) {
//         return false;
//     }
//     if (v["parameter"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_5(v["parameter"])) {
//         return false;
//     }
//     if (v["record"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_7(v["record"])) {
//         return false;
//     }
//     if (v["scrapType"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["scrapType"])) {
//         return false;
//     }
//     if (v["text"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["text"])) {
//         return false;
//     }
//     if (v["title"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["title"])) {
//         return false;
//     }
//     if (v["type"] === undefined) {
//         return false;
//     }
//     if (!__is___struct_4(v["type"])) {
//         return false;
//     }
//     if (v["valueParamList"] === undefined) {
//         return false;
//     }
//     if (!__is_array_object___struct_12(v["valueParamList"])) {
//         return false;
//     }
//     if (v["width"] === undefined) {
//         return false;
//     }
//     if (!__is_number(v["width"])) {
//         return false;
//     }
//     return true;
// }

// let res = __is___struct_3(element);
// console.log("res :>> ", res);

// import http from 'http';
// const http = require("http");
// const agent = new http.Agent({ keepAlive: true, keepAliveMsecs: 5000 });

// // 从 Node.js 8 开始，服务器的 keep-alive 默认 5 秒超时
// http.createServer((req, res) => {
//     res.write("hello world");
//     res.end();
// }).listen(8080);

// // 每 5 秒发起一次请求
// setInterval(() => {
//     // Error: socket hang up
//     // code: 'ECONNRESET'
//     let client = http.get("http://127.0.0.1:8080", { agent }, res => {
//         res.on("data", (data) => {
//             console.log('data :>> ', data.toString());
//         });
//         res.on("end", () => {
//             console.log("success");
//         });
//         res.on("error", (error) => {
//             console.log('error :>> ', error);
//         });
//         res.on("close", (data) => {
//             console.log('closed :>> ', data);
//         });
//     });
//     client.on("error", (err) => {
//         console.log('unhandleError :>> ', err);
//     });
// }, 5000);

const fs = require('fs');
const path = require('path');
let p = path.resolve("D:\\Temp\\example11\\测试文件夹 - 副本 (1)");
fs.rmdir(p, { recursive: true }, (err) => {
    console.log('err :>> ', err);
});