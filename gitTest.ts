import SimpleGitFactory from "simple-git";
import archiver from "archiver";
import * as fs from "fs";


const f1 = async () => {
    // let git = simpleGit({
    //     baseDir: "C:\\Users\\hongji\\AppData\\Roaming\\Electron\\CycloneProject\\project1",
    // })
    // let res = ""
    // let res1 = await git1.status()
    // console.log('res1 :>> ', res1);

    let git2 = SimpleGitFactory()
    await git2.cwd({ path: "C:\\Users\\hongji\\AppData\\Roaming\\Electron\\CycloneProject\\project1", root: true })
    let res = await git2.diff(["HEAD", "06ebc42a8"])
    // console.log('res2 :>> ', res2);
    return res
}

(async () => {
    let res = await f1()
    console.log('res :>> \n', res);
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