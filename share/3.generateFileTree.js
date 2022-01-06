const _ = require('lodash')
var resShould = [
    {
        "type": "file",
        "name": "main.flow",
        "ext": "flow"
    },
    {
        "type": "folder",
        "name": "folder1",
        "files": [
            { "type": "file", "name": "aaa.flow", "ext": "flow" },
            { "type": "file", "name": "bbb.flow", "ext": "flow" },
            {
                "type": "folder", "name": "folder11", "files": [
                    { "type": "file", "name": "aaa.flow", "ext": "flow" }]
            }]
    },
    {
        "type": "folder",
        "name": "folder2",
        "files": [
            { "type": "file", "name": "aaa.flow", "ext": "flow" },
            {
                "type": "folder", "name": "folder22", "files": [
                    { "type": "file", "name": "aaa.flow", "ext": "flow" }]
            }]
    },
    {
        "type": "folder",
        "name": "folder3",
        "files": [
            { "type": "file", "name": "aaa.flow", "ext": "flow" }]
    },
    {
        "type": "folder", "name": "folder5", "files": []
    }
]

let rootShould = {
    "main.flow": {
        "type": "file"
    },
    "folder1": {
        "aaa.flow": {
            "type": "file"
        },
        "bbb.flow": {
            "type": "file"
        },
        "folder11": {
            "aaa.flow": {
                "type": "file"
            },
            "type": "folder"
        },
        "type": "folder"
    },
    "folder2": {
        "aaa.flow": {
            "type": "file"
        },
        "folder22": {
            "aaa.flow": {
                "type": "file"
            },
            "type": "folder"
        },
        "type": "folder"
    },
    "folder3": {
        "aaa.flow": {
            "type": "file"
        },
        "type": "folder"
    },
    "folder4": {
        "folder44": {
            "aaa.flow": {
                "type": "file"
            },
            "type": "folder"
        }
    },
    "folder5": {
        "type": "folder"
    }
}

var arr = [
    { entry: '/main.flow', type: 'file' },
    { entry: '/folder1', type: 'folder' },
    { entry: '/folder1/aaa.flow', type: 'file' },
    { entry: '/folder1/bbb.flow', type: 'file' },
    { entry: '/folder1/folder11', type: 'folder' },
    { entry: '/folder1/folder11/aaa.flow', type: 'file' },
    { entry: '/folder2', type: 'folder' },
    { entry: '/folder2/aaa.flow', type: 'file' },
    { entry: '/folder2/folder22', type: 'folder' },
    { entry: '/folder2/folder22/aaa.flow', type: 'file' },
    { entry: '/folder3', type: 'folder' },
    { entry: '/folder3/aaa.flow', type: 'file' },
    { entry: '/folder4/folder44', type: 'folder' },
    { entry: '/folder4/folder44/aaa.flow', type: 'file' },
    { entry: '/folder5', type: 'folder' }
]

const helper1 = (arr) => {
    let node = {};
    arr.forEach(ele => {
        var curr = ele.entry.split('/').slice(1);
        let p = node;
        curr.forEach((ele) => {
            if (p[ele] === undefined) {
                p[ele] = {};
            }
            p = p[ele];
        });
        p.type = ele.type;
    });
    return node
}

const helper2 = (node) => {
    let temp = [];
    for (let prop in node) {
        if (node[prop].type === 'file') {
            temp.push({ type: "file", name: prop, ext: "flow" });
        }
        if (node[prop].type === 'folder') {
            let innerObj = { type: "folder", name: prop, files: [] };
            innerObj.files = helper2(node[prop]);
            temp.push(innerObj);
        }
    }
    return temp;
};

// let root = helper1(arr)
// console.log('root :>> ', JSON.stringify(root));
// let res = helper2(root)
// console.log('res :>> ', JSON.stringify(res));

// let root = {}
// arr.forEach(ele => { _.set(root, ele.entry.split('/').slice(1), { type: ele.type }) })
// console.log('root :>> ', root);
// let res = helper2(root)
// console.log('res :>> ', JSON.stringify(res));