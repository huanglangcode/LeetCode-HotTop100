import SimpleGitFactory, { GitError } from "simple-git";
import * as fs from "fs";
import { spawn, exec, execSync } from "child_process";
import iconv from "iconv-lite";
import os from "os";
// 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

// git@github.com:huanglangcode/testoriginrepository.git


const f1 = async () => {
    // let git = simpleGit({
    //     baseDir: "C:\\Users\\hongji\\AppData\\Roaming\\Electron\\CycloneProject\\project1",
    // })
    // let res = ""
    // let res1 = await git1.status()
    // console.log('res1 :>> ', res1);
    let git = SimpleGitFactory()
    await git.cwd({ path: "C:\\Users\\hongji\\Documents\\UiPath\\repo", root: true })
    // await git.cwd({ path: "C:\\Users\\hongji\\AppData\\Roaming\\speed_dev\\data\\designer\\SpeedProject\\Git项目001", root: true })
    // await git.branch([`--set-upstream-to=origin/${mainBranch || "main"} main`]);
    // const res = await git.pull([
    //     "origin",
    //     "main",
    //     "--allow-unrelated-histories",
    //     "--rebase=false",
    // ]);
    const res = await git.revparse(["--abbrev-ref", "HEAD"])
    // let res = await git.pull(["--allow-unrelated-histories", "--rebase=false"])
    console.log('res :>> ', res);
    // let res = await git.log()
    // try {
    //     const res = await git.pull(["--allow-unrelated-histories", "--rebase=false"])
    //     console.log('res :>> ', res);
    // } catch (error) {
    //     console.log('error :>> ', error);
    //     const arr = error.message.split("\n")
    //     for (const ele of arr) {
    //         if (ele.startsWith("fatal: could not read Username")) { // http(s)
    //             break
    //         }
    //         if (ele.startsWith("fatal: Could not read from remote repository")) { // ssh
    //             break
    //         }
    //     }
    // }
    // type cmdkeyOp = 'list' | 'add' | 'delete' | 'generic';

    // async function cmdkey(op: cmdkeyOp, targetName: string, username?: string, password?: string) {
    //     return new Promise<string>((resolve) => {
    //         let cmd = `cmdkey.exe /${op}:${targetName}`;
    //         (username && (cmd += ` /user:${username}`));
    //         (password && (cmd += ` /user:${password}`));

    //         exec(cmd, { encoding: 'buffer' }, (error, stdout, stderr) => {
    //             if (stdout.length) {
    //                 const str = iconv.decode(stdout, "cp936")
    //                 console.log('stdout :>> ', str);
    //                 resolve(str)
    //             } else {
    //                 resolve(`cmdkey exec failed, ${error.message}`)
    //             }

    //         });
    //     })
    // }
    // let res: string = await cmdkey("generic", "http://gitlab.mycyclone.com/lang.huang/repo.git", "lang.huang", "Aa123456")
    // console.log('res :>> ', res.split("\r\n").filter(ele => !!ele));

    // remoteName: string, remoteRepo: string
    // let res = await git.addRemote("origin", "http://gitlab.mycyclone.com/lang.huang/repo.git");
    // console.log('res :>> ', res);

    // const git = spawn('git', ["-c", `core.askPass="C:\\Users\\hongji\\Documents\\UiPath\\空白流程6\\askpass.sh"`, 'pull'], { cwd: "C:\\Users\\hongji\\Documents\\UiPath\\空白流程6", shell: true })


    // git.clone("https://huanglangcode123456:gxasdasdasdasdasd@github.com/huanglangcode/LeetCode-HotTop100.git", [], (err: GitError, data) => {

    // })   // 可以正确clone
    // // let res = await git.clone("git@github.com:huanglangcode/LeetCode-HotTop100.git") // git account 配置了公钥可以clone
    // // let res = await git.clone("http://lang.huang:Aa111111@gitlab.mycyclone.com/lang.huang/repo.git") // 私有项目 已经配置过用户名密码不需要再配置 gitlab支持用户名密码. github不再支持(仅支持token)
    // // let res = await git.clone("https://huanglangcode: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@github.com/huanglangcode/testoriginrepository.git") // 私有项目 需要配置用户名密码
    // console.log('res :>> ');
    // let res = await git2.diff(["HEAD", "06ebc42a8"])
    // let res = await git.clone("git@gitlab.mycyclone.com:lang.huang/repo.git", "C:\\Users\\hongji\\AppData\\Roaming\\Electron\\CycloneProject\\repo")
    // console.log('res2 :>> ', res);
    // let response = git.cwd("C:\\Users\\hongji\\AppData\\Roaming\\Electron\\CycloneProject\\repo")
    // console.log('response :>> ', response);
    // await git.push("http://gitlab.mycyclone.com/lang.huang/repo.git")

    // return res
}

(async () => {
    try {
        let res = await f1()
        console.log('res :>> \n', res);
    } catch (error) {
        console.log('error :>> ', error.message.split('\n'));
    }
})()

// var file_system = require('fs');
// var archiver = require('archiver');

// var output = file_system.createWriteStream('target.zip');
// var archive = archiver('zip');

// output.on('close', function () {
//     console.log(archive.pointer() + ' total bytes');
//     console.log('archiver has been finalized and the output file descriptor has closed.');
// });

// archive.on('error', function(err){
//     throw err;
// });

// archive.pipe(output);

// // append files from a sub-directory, putting its contents at the root of archive
// archive.directory(source_dir, false);

// // append files from a sub-directory and naming it `new-subdir` within the archive
// archive.directory('subdir/', 'new-subdir');

// archive.finalize();