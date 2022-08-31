import fs from "fs"
import zlib from "zlib"
import util from "util"
import path from "path"
import crypto from "crypto";
const ENCRYPTION_KEY = "OyhCGHpfGTdMuYswONOevzeKkzJvsopc";


function decryptBuffer(data: Buffer, key: string = ENCRYPTION_KEY): Buffer {
    const iv = data.slice(0, 16);
    const encryptedText = data.slice(16);
    const decipher = crypto.createDecipheriv("aes-256-cfb", Buffer.from(key), iv);
    const decrypted = decipher.update(encryptedText);

    return Buffer.concat([decrypted, decipher.final()]);
}

async function readCode(file: string): Promise<any> {
    let buf = fs.readFileSync(file);
    let decrypted = (await util.promisify(zlib.inflateRaw)(decryptBuffer(buf))).toString();
    return JSON.parse(decrypted)
}

interface TreeNode {
    parent: number,
    self: number,
    children: TreeNode[]
}

/**
 *  res: [
 * 'insert #13 at 2th child of <body #0:1>', 
 * 'move #6 to 1th child of <body #5:1>', 
 * 'insert #12 at 1th child of <body #9:1>', 
 * 'update #11'
 * ]
 */
async function main() {
    let bef = path.resolve(__dirname, "flow", "bef.flow")
    let aft = path.resolve(__dirname, "flow", "aft.flow")
    let code1 = await readCode(bef)
    // let code2 = await readCode(aft)
    // console.log('code2', code2)

    // console.log('code1', code1)
    //convert codeMap to tree
    let startIdx = 0
    let tree: TreeNode = {
        parent: -1,
        self: 0,
        children: []
    }
    let queue = [tree]
    while (queue.length) {
        let curr = queue.pop() as TreeNode
        if (code1[curr.self].schemaBodyList) {
            for (const child of code1[curr.self].schemaBodyList) {
                for (const childLine of child.codeList) {
                    let c = {
                        parent: curr.self,
                        children: [],
                        self: childLine
                    }
                    curr.children.push(c)
                    queue.unshift(c)
                }
            }
        }
    }
    console.log('tree', tree)
}

main()