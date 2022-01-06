var _ = require('lodash');

var obj = {
    // "schema1": {
    //     "$schema": "./$schema.json",
    //     "id": "project1",
    //     "displayName": "工商银行",
    //     "moduleName": "project1",
    //     "tag": ["银行项目"],
    //     "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
    //     "color": "#539AEC",
    //     "processList": [
    //         {
    //             "processType": "/flow1.flow",
    //             "methodName": "/flow1.flow",
    //             "displayName": "功能1",
    //             "tags": ["人事部"],
    //             "alias": []
    //         },
    //         {
    //             "processType": "/flow2.flow",
    //             "methodName": "/flow2.flow",
    //             "displayName": "功能2",
    //         },
    //         {
    //             "processType": "/flow3.flow",
    //             "methodName": "/flow3.flow",
    //             "displayName": "功能3",
    //             "tags": ["人事部"],
    //         },
    //         {
    //             "processType": "/flow4.flow",
    //             "methodName": "/flow4.flow",
    //             "displayName": "功能4",
    //             "tags": ["行政部"],
    //         },


    //     ]
    // },
    "schema2": {
        "id": "工商银行",
        "displayName": "工商银行",
        "moduleName": "工商银行",
        "processList": [
            {
                "processType": "/主流程.flow",
                "methodName": "/主流程.flow",
                "content": [],
                "input": [],
                "output": [],
                "displayName": "主流程",
                "desc": "1",
                "disabled": true
            },
            {
                "processType": "/技术部/flow1.flow",
                "methodName": "/技术部/flow1.flow",
                "displayName": "功能一",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能一功能一功能一功能一",
                "disabled": false
            },
            {
                "processType": "/人事部/人事一部/flow1.flow",
                "methodName": "/人事部/人事一部/flow1.flow",
                "displayName": "功能二",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能二功能二功能二功能二",
                "disabled": false
            },
            {
                "processType": "/人事部/人事二部/flow1.flow",
                "methodName": "/人事部/人事二部/flow1.flow",
                "displayName": "功能三",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能三功能三功能三",
                "disabled": false
            },
            {
                "processType": "/运营部/运营一部/flow1.flow",
                "methodName": "/运营部/运营一部/flow1.flow",
                "displayName": "功能四",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能四功能四功能四",
                "disabled": false
            },
            {
                "processType": "/运营部/运营三部/flow1.flow",
                "methodName": "/运营部/运营三部/flow1.flow",
                "displayName": "功能五",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能五功能五功能五",
                "disabled": false
            },
            {
                "processType": "/运营部/运营二部/flow1.flow",
                "methodName": "/运营部/运营二部/flow1.flow",
                "displayName": "功能六",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能六功能六功能六",
                "disabled": false
            },
            {
                "processType": "/flow1.flow",
                "methodName": "/flow1.flow",
                "displayName": "功能入口",
                "content": [],
                "input": [],
                "output": [],
                "desc": "功能入口功能入口功能入口",
                "disabled": false
            },
            {
                "processType": "/人事部/人事一部/flow2.flow",
                "methodName": "/人事部/人事一部/flow2.flow",
                "displayName": "人事功能1-2",
                "content": [],
                "input": [],
                "output": [],
                "desc": "人事功能1-2人事功能1-2人事功能1-2",
                "disabled": false
            },
            {
                "processType": "/人事部/人事二部/flow2.flow",
                "methodName": "/人事部/人事二部/flow2.flow",
                "displayName": "人事功能2-2",
                "content": [],
                "input": [],
                "output": [],
                "desc": "人事功能2-2人事功能2-2人事功能2-2",
                "disabled": false
            },
            {
                "processType": "/技术部/flow2.flow",
                "methodName": "/技术部/flow2.flow",
                "displayName": "技术部功能1-2",
                "content": [],
                "input": [],
                "output": [],
                "desc": "技术部功能1-2技术部功能1-2技术部功能1-2",
                "disabled": false
            }
        ]
    },
    // "schema3": {
    //     "id": "project3",
    //     "displayName": "建设银行",
    //     "moduleName": "project3",
    //     "tag": ["银行项目"],
    //     "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
    //     "color": "#539AEC",
    //     "processList": [
    //         {
    //             "processType": "/flow1.flow",
    //             "methodName": "/flow1.flow",
    //             "displayName": "功能1",
    //             "tags": ["人事部"],
    //             "alias": []
    //         },
    //         {
    //             "processType": "/flow2.flow",
    //             "methodName": "/flow2.flow",
    //             "displayName": "功能2",
    //         },
    //         {
    //             "processType": "/flow3.flow",
    //             "methodName": "/flow3.flow",
    //             "displayName": "功能3",
    //             "tags": ["人事部"],
    //         },
    //         {
    //             "processType": "/flow4.flow",
    //             "methodName": "/flow4.flow",
    //             "displayName": "功能4",
    //             "tags": ["行政部"],
    //         },
    //     ]
    // },
}

var obj2 = {
    "$schema": "./$schema.json",
    "id": "project2",
    "displayName": "农业银行",
    "moduleName": "project2",
    "icon": "898dce83fd155abe55b5cdc90e06137e.svg",
    "color": "#539AEC",
    "processList": [
        {
            "processType": "/技术部/flow2.flow",
            "methodName": "/技术部/flow2.flow",
            "displayName": "功能2",
            "tags": ["技术部"],
        },
        {
            "processType": "/企划部/flow1.flow",
            "methodName": "/企划部/flow1.flow",
            "displayName": "功能1",
            "tags": ["企划部"],
        },
        {
            "processType": "/技术部/技术一部/flow3.flow",
            "methodName": "/技术部/技术一部/flow3.flow",
            "displayName": "功能3",
            "tags": ["技术部", "技术一部"],
        },
        {
            "processType": "/技术部/技术一部/技术一部 - 1组/flow4.flow",
            "methodName": "/flow4.flow",
            "displayName": "功能4",
            "tags": ["技术部", "技术一部", "技术一部 - 1组"],
        },
        {
            "processType": "/技术部/技术一部/技术一部 - 2组/flow5.flow",
            "methodName": "/flow5.flow",
            "displayName": "功能5",
            "tags": ["技术部", "技术一部", "技术一部 - 2组"],
        },
    ]
}

const exceptedRes = [
    {
        displayName: "银行项目",
        subMenuList: [
            {
                displayName: "工商银行",
                subMenuList: [
                    {
                        displayName: "人事部",
                        processList: [
                            {
                                displayName: "功能1",
                                processType: "/flow1.flow"
                            },
                            {
                                displayName: "功能3",
                                processType: "/flow3.flow"
                            }
                        ]
                    },
                    {
                        displayName: "行政部",
                        processList: [
                            {
                                displayName: "功能4",
                                processType: "/flow4.flow"
                            }
                        ]
                    },
                ],
                processList: [
                    {
                        displayName: "功能2",
                        processType: "/flow2.flow"
                    }
                ]
            },
            {
                displayName: "建设银行",
                subMenuList: [
                    {
                        displayName: "人事部",
                        processList: [
                            {
                                displayName: "功能1",
                                processType: "/flow1.flow"
                            },
                            {
                                displayName: "功能3",
                                processType: "/flow3.flow"
                            }
                        ]
                    },
                    {
                        displayName: "行政部",
                        processList: [
                            {
                                displayName: "功能4",
                                processType: "/flow4.flow"
                            }
                        ]
                    },
                ],
                processList: [
                    {
                        displayName: "功能2",
                        processType: "/flow2.flow"
                    }
                ]
            }
        ]
    },
    {
        displayName: "其他组件",
        subMenuList: [
            {
                displayName: "农业银行",
                subMenuList: [
                    {
                        displayName: "企划部",
                        processList: {
                            displayName: "功能1",
                            processType: "/flow1.flow"
                        }
                    },
                    {
                        displayName: "技术部",
                        subMenuList: [{
                            displayName: "技术一部",
                            processList: {
                                displayName: "功能3",
                                processType: "/flow3.flow"
                            }
                        }],
                        processList: {
                            displayName: "功能2",
                            processType: "/flow2.flow"
                        }
                    }
                ]
            }
        ]
    }
]
/**
export interface IMenu {
    displayName: string;
    icon?: any;
    iconTheme?: Record<string, any>;
    color?: string;
    menuIndex?: number;
    subMenuList: IMenu[];
    processList?: IMenuItem[];
    disabled?: boolean;
    hidden?: boolean;
    id?: string;
}
export interface IMenuItem {
    displayName: string;
    processType: string;
    disabled?: boolean;
    hidden?: boolean;
    desc?: string;
    componentPath?: string; // 组件
}
 */

let root = { displayName: "root", subMenuList: [] }

const helper = (menu, menuPath) => {
    if (!menuPath.length) {
        return menu;
    }
    for (const subMenu of menu.subMenuList) {
        if (subMenu.displayName === menuPath[0]) {
            return helper(subMenu, menuPath.slice(1));
        }
    }
    const newSubMenu = {
        displayName: menuPath[0],
        subMenuList: [],
    };
    menu.subMenuList.push(newSubMenu);
    return helper(newSubMenu, menuPath.slice(1));
}

const helper2 = (menu, schema) => {
    const newSubMenu = {
        id: schema.id,
        displayName: schema.displayName,
        subMenuList: [],
        processList: [],
    };
    schema.processList.sort((a, b) => {
        return b.processType.split("/").length - a.processType.split("/").length;
    });
    for (const process of schema.processList) {
        process.tags = process.processType.split("/").slice(1, -1);
        if (process.tags !== undefined) {
            let subMenu = helper(newSubMenu, process.tags)
            if (!!subMenu.processList && subMenu.processList.length) {
                subMenu.processList.push(process)
            } else {
                subMenu.processList = [process]
            }
        } else {
            newSubMenu.processList.push(process);
        }
    }
    menu.subMenuList.push(newSubMenu);
}

function loadMenu(schemaMap) {
    for (const key in schemaMap) {
        let schema = schemaMap[key]
        if (schema.tag !== undefined) {
            let subMenu = helper(root, schema.tag)
            helper2(subMenu, schema)
        } else {
            let subMenu = helper(root, ["其他组件"])
            helper2(subMenu, schema)
        }
    }
    return root;
}

let res = loadMenu(obj)
console.log('res :>> ', JSON.stringify(res));