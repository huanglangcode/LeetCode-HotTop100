import { EventEmitter } from "events";
import { SerializedIpc } from "./SerializedIpc";
import { createProxy } from "./proxy";
import { A, a, AA, aa } from "./proxyServer";
import axios from "axios";


// 默认搞个server端玩玩
const eventHandler = new EventEmitter()
const client = new SerializedIpc(eventHandler)

let proxy = createProxy<A>(a, client);
// let proxy2 = createProxy<AA>(aa);

(async () => {
    // await proxy.WCDMA(10016);
    console.log('proxy.attr111 :>> ', await proxy.attr);
    await proxy.WCDMA(20016);
    // await proxy.WCDMA(30016);
    console.log('proxy.attr222 :>> ', await proxy.attr);
})();

// (async () => {
//     return proxy2.CDMA2();
// })();