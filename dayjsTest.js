import trash from "trash";
import path from "node:path";
import fs from "node:fs"

(async () => {
    const basicPath = "C:\\Users\\hongji\\AppData\\Roaming\\speed_dev\\data\\designer\\SpeedProject\\trashItem"
    let p = path.resolve(basicPath)
    console.time("1")
    let arr = fs.readdirSync(p)
    console.timeEnd("1")
    const targetArr = []
    for (const ele of arr) {
        if (ele.indexOf("-") !== -1) {
            // console.time("delete")
            // await trash(path.resolve(basicPath, ele))
            // console.timeEnd("delete")

            targetArr.push(path.resolve(basicPath, ele))
        }
    }
    console.time("delete")
    await trash(targetArr)
    console.timeEnd("delete")

})()