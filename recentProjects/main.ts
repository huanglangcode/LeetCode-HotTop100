// // import fs from "fs";
// // import path from "path";
// const fs = require("fs");
// const path = require("path");

// interface ProjectProperties {
//     projectName: string,
//     editTime: number,
//     projectPath: string
// }


// class RecentProject {
//     public recent: ProjectProperties[];
//     public configPath: string = path.resolve("recent.json");
//     constructor() {
//         const recentConfig = fs.readFileSync(this.configPath);
//         this.recent = JSON.parse(recentConfig.toString());
//     }
//     // 获取最近打开的项目列表 及最近打开时间
//     public getRecentProjects = (): ProjectProperties[] => {
//         return this.recent;
//     };
//     // 打开某项目之后
//     public afterOpenProject(projectName: string, projectPath: string) {
//         let idx = this.recent.findIndex((ele) => {
//             return ele.projectPath === projectPath && ele.projectName === projectName;
//         });
//         if (idx !== -1) {// replace
//             // [this.recent[0], this.recent[idx]] = [this.recent[idx], this.recent[0]];
//             this.recent[idx].editTime = Date.now();
//             this.recent.unshift(...this.recent.splice(idx, 1));
//         } else {// push
//             if (this.recent.length === 10) {
//                 this.recent.pop();
//             }
//             this.recent.unshift({
//                 projectName,
//                 projectPath,
//                 editTime: Date.now()
//             });

//         }
//         this.writeProjectsConfig();
//     }

//     // clean specific project or cleanAll
//     public cleanProjects(projectName?: string) {
//         if (!projectName) {
//             this.recent = [];
//         } else {
//             let idx = this.recent.findIndex((ele) => {
//                 return ele.projectName === projectName;
//             });
//             if (idx !== -1) {
//                 this.recent.splice(idx, 1);
//             }
//         }
//         this.writeProjectsConfig();
//         return this.recent;
//     }
//     private writeProjectsConfig() {
//         fs.writeFileSync(this.configPath, JSON.stringify(this.recent));
//     }
// }

// class Project {
//     constructor() {

//     }

//     // D:\workspace\LeetCode-HotTop100\recentProjects\projectDemo\package.json
//     public allFiles(projectPath: string) {
//         const qq = path.resolve(projectPath, "..");
//         console.log('qq :>> ', qq);
//         const files = fs.readdirSync(qq);
//         console.log('projectDetail :>> ', files);
//         return files;
//     }
// }
// function ListNode(path, chilren) {
//     this.path = (path === undefined ? 0 : path);
//     this.chilren = (chilren === undefined ? null : chilren);
// }
// function traverseDir(dir: string) {
//     fs.readdirSync(dir).forEach((file: any) => {
//         let fullPath = path.join(dir, file);
//         if (fs.lstatSync(fullPath).isDirectory()) {
//             console.log(file);
//             traverseDir(fullPath);
//         } else {
//             console.log(file);
//         }
//     });
// }


// var fileArr = [
//     'package.json',
//     'process.js',
//     'README.md',
//     'resources',
//     'schema.json',
//     '人员信息表.xlsx',
//     '导出人员信息.flow',
//     '循环显示.flow',
//     '流程引用.flow'
// ];
// // var p = new Project();
// // var files = p.allFiles("D:\\workspace\\LeetCode-HotTop100\\recentProjects\\projectDemo\\package.json");
// // console.log('zzz :>> ', files);
// traverseDir("D:\\workspace\\LeetCode-HotTop100\\recentProjects\\projectDemo");