const fs = require('fs');
const os = require('os');
/**
 *   temp = result.slice(result.indexOf("language="), result.length);
    temp = temp.slice(temp.indexOf("=") + 1, temp.indexOf("\n"));
    const finalIni = result.replace(temp, language);
 */
let result = fs.readFileSync("C:\\Users\\hongji\\AppData\\Roaming\\speed_dev\\config\\recorder\\config.ini", { encoding: "utf-8" })
let arr = result.split(os.EOL)
console.log('arr :>> ', arr);
for (let i = 0; i < arr.length; i++) {
    let str = arr[i]
    let idx = str.indexOf("language=")
    if (idx !== -1) {
        arr[i] = str.replace(str.slice(idx + 9, str.indexOf('\n') !== -1 ? str.indexOf('\n') : str.length), "EN")
    }
}
console.log('arr :>> ', arr.join(os.EOL));