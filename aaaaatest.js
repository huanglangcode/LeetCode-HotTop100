// const getToken = async (url) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('getToken')
//             _t = '123';
//             resolve(url + _t);
//         }, 1000)
//     });
// };

// let token = null

// const request = async (url) => {
//     // if (!token) {
//     token = await getToken(url);
//     // }

//     console.log('token, url :>> ', token, url);
// };

// for (let i = 0; i < 100; i++) {
//     request(i)
// }

var DepGraph = require('dependency-graph').DepGraph;

var graph = new DepGraph();

/**
 * 假设有
 * 主流程 引用了 flow1
 * 主流程 引用了 flow2
 * flow1 引用了 flow3 
 */

graph.addNode("主流程")
graph.addNode("flow1")
graph.addNode("flow2")
graph.addNode("flow3")

graph.addDependency("主流程", "flow1")
graph.addDependency("主流程", "flow2")
graph.addDependency("flow1", "flow3")

let res = graph.directDependenciesOf("主流程")
console.log('res :>> ', res);