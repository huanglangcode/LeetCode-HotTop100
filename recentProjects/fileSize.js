import fs from "fs";
import path from "path";

const getFolderSize = async (source, dataUnit = "Mb") => {
    let stack = [path.resolve(source)];
    let totalSize = 0;
    while (stack.length) {
        const ele = stack.pop();
        for (const file of await fs.promises.readdir(ele)) {
            const diskPath = path.resolve(ele, file);
            if (fs.statSync(diskPath).isDirectory()) {
                stack.unshift(diskPath);
            } else {
                let filestatus = fs.statSync(diskPath);
                totalSize += filestatus.size;
            }
        }
    }
    // todo 根据传进来的单位进行转换
    console.log('totalSize :>> ', totalSize);
    console.log('(totalSize / 1024 / 1024).toPrecision(2); :>> ', (totalSize / 1024 / 1024).toPrecision(3));
};

getFolderSize("C:\\Users\\hongji\\AppData\\Roaming\\cyclone\\logs");