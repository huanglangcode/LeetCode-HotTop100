import fs from "fs"
import path_module from 'path';
let arr: any[] = []
async function LoadModules(path: string) {
    let stat = await fs.promises.lstat(path)
    if (stat.isDirectory()) {
        let files: string[] = await fs.promises.readdir(path)
        for (var i = 0; i < files.length; i++) {
            if (files[i] === 'index.ts') continue
            await LoadModules(path_module.join(path, files[i]));
        }
    } else {
        let module = require(path);
        arr.push(module)
    }
}
var DIR = path_module.join(__dirname);
console.log('DIR :>> ', DIR);
(async () => {
    await LoadModules(DIR);
    // console.log('module_holder :>> ', module_holder);
    console.log('arr2222 :>> ', arr);

    // let p = new (arr[0].default)()
    // console.log('p.call() :>> ', p.funcA());
})()


function a() {
    console.log('arr1111 :>> ', arr);
}

// exports.module_holder = module_holder;

a()