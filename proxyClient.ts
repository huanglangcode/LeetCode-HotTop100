import { createProxy } from "./proxy";
import { A, a, AA, aa, eventHandler } from "./proxyServer";

let proxy = createProxy<A>(a, eventHandler);
let proxy2 = createProxy<AA>(aa, eventHandler);

eventHandler.on("whoKnows", (data) => {
    console.log('whoKnows :>> ', data);
});

(async () => {
    var func1 = (data: string) => {
        console.log('proxy.data :>> ', data);
        eventHandler.emit("whoKnows", data)
    }
    return proxy.CDMA(func1);
})();
(async () => {
    return await proxy2.CDMA2();
})();


