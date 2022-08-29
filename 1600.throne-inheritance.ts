// /*
//  * @lc app=leetcode id=1600 lang=typescript
//  *
//  * [1600] Throne Inheritance
//  */
// // class ThroneInheritance1 {

// //     private Node root; // 开国国王
// //     private HashMap<String, Node> nameToNodeMap; // 人名 -> Node

// //     // 王室成员 封装类
// //     private class Node {
// //     String name;
// //     boolean isAlive; // 是否还活着
// //     ArrayList < Node > children; // 孩子们

// //         public Node(String name) {
// //         this.name = name;
// //         this.isAlive = true;
// //         this.children = new ArrayList<>();
// //     }
// // }

// //     public ThroneInheritance(String kingName) {
// //     root = new Node(kingName);
// //     nameToNodeMap = new HashMap<>();
// //     nameToNodeMap.put(kingName, root);
// // }

// //     public void birth(String parentName, String childName) {
// //     Node child = new Node(childName);
// //     nameToNodeMap.put(childName, child);

// //     Node parent = nameToNodeMap.get(parentName);
// //     parent.children.add(child);
// // }

// //     public void death(String name) {
// //     nameToNodeMap.get(name).isAlive = false;
// // }

// //     public List < String > getInheritanceOrder() {
// //     ArrayList < String > order = new ArrayList<>();
// //     getInheritanceOrder(root, order);
// //     return order;
// // }

// //     // DFS：获取从cur开始的王位继承顺序，追加填入order中
// //     private void getInheritanceOrder(Node cur, ArrayList < String > order) {
// //     if (cur == null) return;

// //     if (cur.isAlive) order.add(cur.name); // 当前还活着，加入order

// //     for (Node child : cur.children) { // 按顺序，DFS，遍历孩子们
// //         getInheritanceOrder(child, order);
// //     }
// // }
// // }
// // @lc code=start

// class InhertNode {
//     public name: string;
//     public isDead: boolean;
//     public children: InhertNode[];
//     constructor(name: string) {
//         this.name = name;
//         this.isDead = false;
//         this.children = [];
//     }
// }
// class ThroneInheritance {
//     public root: InhertNode;
//     public map: Map<string, InhertNode>
//     constructor(kingName: string) {
//         this.root = new InhertNode(kingName);
//         this.map = new Map();
//         this.map.set(kingName, this.root);
//     }

//     birth(parentName: string, childName: string): void {
//         let node = new InhertNode(childName);
//         this.map.set(childName, node);
//         let parentNode = this.map.get(parentName);
//         parentNode!.children.push(node);
//     }

//     death(name: string): void {
//         this.map.get(name)!.isDead = true;
//     }

//     getInheritanceOrder(): string[] {
//         let ans: string[] = [];
//         const helper = (node: InhertNode): void => {
//             if (!node) {
//                 return;
//             }
//             if (!node.isDead) {
//                 ans.push(node.name);
//             }
//             let children = node.children;
//             for (const child of children) {
//                 helper(child);
//             }
//         };
//         helper(this.root);
//         return ans;
//     }
// }
// /**
//  * Input
// ["ThroneInheritance", "birth", "birth", "birth", "birth", "birth", "birth", "getInheritanceOrder", "death", "getInheritanceOrder"]
// [["king"], ["king", "andy"], ["king", "bob"], ["king", "catherine"], ["andy", "matthew"], ["bob", "alex"], ["bob", "asha"], [null], ["bob"], [null]]
// Output
// [null, null, null, null, null, null, null, ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"], null, ["king", "andy", "matthew", "alex", "asha", "catherine"]]
//  */
// var obj = new ThroneInheritance('king');
// obj.birth('king', 'andy');
// obj.birth('king', 'bob');
// obj.birth('king', 'catherine');
// obj.birth('andy', 'matthew');
// obj.birth('bob', 'alex');
// obj.birth('bob', 'asha');
// console.log('obj :>> ', obj);
// let order = obj.getInheritanceOrder();
// console.log('order111 :>> ', order);
// obj.death('bob');
// order = obj.getInheritanceOrder();
// console.log('order222 :>> ', order);
// /**
//  * Your ThroneInheritance object will be instantiated and called as such:
//  * var obj = new ThroneInheritance(kingName)
//  * obj.birth(parentName,childName)
//  * obj.death(name)
//  * var param_3 = obj.getInheritanceOrder()
//  */
// // @lc code=end