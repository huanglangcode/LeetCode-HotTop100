import { EventEmitter } from "events";
import { SerializedIpc } from "./SerializedIpc";
import { registerProxy } from "./proxy";

class B {
    channel: string;
    constructor(channel: string) {
        this.channel = channel;
    }
    public B() {
        console.log('this is B :>> ', B.name);
    }
}

export class A extends B {
    static channel = A.name
    constructor() {
        super(A.name);
    }
    public attr = 1;
    public attr2 = 200;
    public CMCC() {
        console.log('.....10086.....');
        return 10086;
    }
    public async WCDMA(num) {
        console.log('.....10010.....', this.attr);
        this.attr++
        return new Promise(resolve => setTimeout(() => { resolve(num) }, 1));
    }
    public CDMA(callback: Function) {
        console.log('.....10000.....');
        for (let i = 0; i < 10; i++) {
            callback(`event number: ${i}`)
        }
        return 10000;
    }

    public async Func1() {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    }
}

export class AA extends B {
    static channel = AA.name
    constructor() {
        super(AA.name);
    }
    public attr = 1;

    private CCC() {
        console.log('111111 :>> ', 111111);
        return 1111
    }
    public CMCC2() {
        console.log('.....10086.....');
        return 10086;
    }
    public WCDMA2() {
        console.log('.....10010.....');
        return 10010;
    }
    public CDMA2() {
        console.log('.....10000.....');
        return 10000;
    }

    public async Func2() {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    }
}

export const a = new A();
export const aa = new AA();
// console.log('Object getOwnPropertyNames :>> ', Object.getOwnPropertyNames(AA));
// console.log('111 :>> ', Object.getOwnPropertyNames(AA.prototype));
// console.log('222 :>> ', Object.getPrototypeOf(AA));
// console.log('333 :>> ', B.isPrototypeOf(AA));
// Object.getOwnPropertyNames(A.prototype).forEach(ele => console.log('A. :>> ', A.prototype[ele], typeof A.prototype[ele]));
// Object:>> ['constructor', 'CMCC', 'WCDMA', 'CDMA']

// 默认搞个server端玩玩
const eventHandler = new EventEmitter()
const server = new SerializedIpc(eventHandler)

registerProxy(a, server);
// registerProxy(aa, eventHandler);
