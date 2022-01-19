import { createProxy } from "./proxy";
import { A, a, AA, aa } from "./proxyServer";

let proxy = createProxy<A>(a);
// let proxy2 = createProxy<AA>(aa);

(async () => {
    // var func1 = (data: string) => {
    //     console.log('proxy.data :>> ', data);
    // }
    await proxy.WCDMA(1);
    await proxy.WCDMA(2);
    await proxy.WCDMA(3);
    return
})();

// (async () => {
//     return proxy2.CDMA2();
// })();


