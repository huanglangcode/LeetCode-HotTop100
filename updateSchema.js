const fs = require('fs');
const path = require('path');

const basePath = "D:\\workspace\\cyclone-schema\\schema\\process"

const processSet = new Set([
    '排序', '数据去重',
    'Excel中插入图片', '创建工作表',
    '删除工作簿', '复制工作簿',
    '重命名工作簿', '删除行/列',
    '插入行/列', '写入单元格数据',
    '写入行列数据', '写入范围数据',
    '批量替换', '应用单元格样式',
    '设置行高/列宽', '合并/拆分单元格'
])


const processSet2 = new Set([
    '排序', '数据去重',
    '查找获取位置和数据', '生成透视表',
    'Excel中插入图片', '插入行/列',
    '删除行/列', '读取单元格数据',
    '读取行列数据', '读取范围数据',
    '写入单元格数据', '写入行列数据',
    '写入范围数据', '获取行列数',
    '批量替换', '按列遍历',
    '获取单元格样式', '应用单元格样式',
    '设置行高/列宽', '合并/拆分单元格'
])


/**
 * {
                "type": "input",
                "id": "type",
                "name": "选择名称/序号",
                "inputType": {
                    "typeId": "string"
                },
                "useOptions": [
                    {
                        "displayName": "工作表名称",
                        "value": "string"
                    },
                    {
                        "displayName": "工作表序号",
                        "value": "number"
                    }
                ],
                "defaultValue": "string",
                "optional": false,
                "desc": "选择目标工作表（Sheet）的名称/序号"
            },
            {
                "type": "input",
                "id": "sheet_name",
                "name": "工作表名称/序号",
                "hint": "请输入工作表名称/序号",
                "inputType": "@type",
                "optional": false,
                "enableJSExpression": true,
                "desc": "输入目标工作表（Sheet）的名称/序号"
            }
 */

const arr = fs.readdirSync(basePath)

for (const fileName of arr) {
    if (fileName.startsWith("excel_")) {
        let str = fs.readFileSync(path.resolve(basePath, fileName), { encoding: 'utf-8' })
        let obj = JSON.parse(str)
        for (const process of obj) {
            // if (processSet2.has(process.displayName)) {
            console.log('process :>> ', process);
            let idx = process.content.findIndex(ele => ele.id === "is_save")
            if (idx !== -1) {
                process.content[idx].defaultValue = false
            }
            // process.content.splice(idx, 1,
            //     {
            //         "type": "input",
            //         "id": "type",
            //         "name": "选择名称/序号",
            //         "inputType": {
            //             "typeId": "string"
            //         },
            //         "useOptions": [
            //             {
            //                 "displayName": "工作表名称",
            //                 "value": "string"
            //             },
            //             {
            //                 "displayName": "工作表序号",
            //                 "value": "number"
            //             }
            //         ],
            //         "defaultValue": "string",
            //         "optional": false,
            //         "desc": "选择目标工作表（Sheet）的名称/序号"
            //     },
            //     {
            //         "type": "input",
            //         "id": "sheet_name",
            //         "name": "工作表名称/序号",
            //         "hint": "请输入工作表名称/序号",
            //         "inputType": "@type",
            //         "optional": false,
            //         "enableJSExpression": true,
            //         "desc": "输入目标工作表（Sheet）的名称/序号"
            //     })
            // }
            // if (processSet.has(process.displayName)) {
            //     console.log('process :>> ', process);
            //     // process.content.push({
            //     //     "type": "input",
            //     //     "id": "is_save",
            //     //     "name": "是否自动保存",
            //     //     "inputType": {
            //     //         "typeId": "boolean"
            //     //     },
            //     //     "useOptions": [
            //     //         {
            //     //             "displayName": "是",
            //     //             "value": true
            //     //         },
            //     //         {
            //     //             "displayName": "否",
            //     //             "value": false
            //     //         }
            //     //     ],
            //     //     "defaultValue": true
            //     // })
            //     process.input.push("is_save")
            // }
        }
        fs.writeFileSync(path.resolve(basePath, fileName), JSON.stringify(obj, null, 4))
    }
}