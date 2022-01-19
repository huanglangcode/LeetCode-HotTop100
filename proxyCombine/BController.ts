import { BaseIpc } from "./ipc/BaseIpc";


class Base {
    channel: string;
    constructor(channel: string) {
        this.channel = channel;
    }
    public Base() {
        console.log('this is B :>> ', Base.name);
    }
}

export class B extends Base {
    static channel = B.name
    constructor() {
        super(B.name);
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

    public async funcReply(num, sender?: BaseIpc) {
        for (let i = 0; i < 1; i++) {
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        }
        return num
    }
}

export const b = new B();
