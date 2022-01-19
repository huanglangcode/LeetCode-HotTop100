import { BaseIpc } from "./BaseIpc";
const log = console

export class ElectronIpc extends BaseIpc {
    public instance: any;
    constructor(ipcInstance) {
        super(ipcInstance);
        if (ipcInstance === undefined || ipcInstance === null) {
            log.error("SerializedIpc got constructor parameter undefined|null");
            return;
        }
        this.instance = ipcInstance;
    }

    public serialize = (arg: any): [Error | undefined, string] => {
        try {
            const res = JSON.stringify(arg);
            return [undefined, res];
        } catch (e) {
            return [e, ""];
        }
        // 经测试， msgpack 不能处理 undefined，array中有undefined也会挂
        // if (arg === undefined || arg === null) {
        //    return arg;
        // }
        // return msgpack.encode(arg);
    }

    public unSerialize = (str: string): [Error | undefined, any] => {
        try {
            const res = JSON.parse(str);
            return [undefined, res];
        } catch (e) {
            return [e, undefined];
        }
        // 经测试， msgpack 不能处理 undefined，array中有undefined也会挂
        // if (str === undefined || str === null) {
        //    return str;
        // }
        // return msgpack.decode(str);
    }

    public send = (channel: string, ...args: any[]) => {
        if (this.instance === undefined || this.instance.send === undefined || this.instance.send === null) {
            log.error("SerializedIpc instance don't have send method. instance=", this.instance);
            return;
        }
        const nargs: string[] = [];
        for (const v of args) {
            const [err, res] = this.serialize(v);
            if (err !== undefined) {
                log.error("SerializedIpc send serialize failed. err=", err);
                return;
            }
            nargs.push(res);
        }
        if (!(channel === "package" && process.env.NODE_ENV === "production")) {
            log.debug("serialized ipc send:", channel, nargs);
        }
        this.instance.send(channel, ...nargs);
    }

    public sendSync = (channel: string, ...args: any[]): Promise<any> | any => {
        if (this.instance === undefined || this.instance.sendSync === undefined || this.instance.sendSync === null) {
            log.error("SerializedIpc instance don't have sendSync method. instance=", this.instance);
            return;
        }
        const nargs: string[] = [];
        for (const v of args) {
            const [err, res] = this.serialize(v);
            if (err !== undefined) {
                log.error("SerializedIpc sendSync serialize failed. err=", err);
                return;
            }
            nargs.push(res);
        }
        return this.instance.sendSync(channel, ...nargs);
    }

    public on = (channel: string, listener: (e, ...args) => void) => {
        if (this.instance === undefined || this.instance.on === undefined || this.instance.on === null) {
            log.error("SerializedIpc instance don't have on method. instance=", this.instance);
            return;
        }

        const wrapped = this.getWrappedListener(channel, false, this, listener as any);
        this.instance.on(channel, wrapped);
    }

    public once = (channel: string, listener: (e, ...args) => void) => {
        if (this.instance === undefined || this.instance.once === undefined || this.instance.once === null) {
            log.error("SerializedIpc instance don't have once method. instance=", this.instance);
            return;
        }

        const wrapped = this.getWrappedListener(channel, true, this, listener as any);
        this.instance.on(channel, wrapped);
    }

    public removeAllListeners = (channel: string) => {
        if (this.instance === undefined || this.instance.removeAllListeners === undefined || this.instance.removeAllListeners === null) {
            log.error("SerializedIpc instance don't have removeAllListeners  method. instance=", this.instance);
            return;
        }
        this.instance.removeAllListeners(channel);
    }

    public removeListener = (channel: string, listener: (e, ...args) => void) => {
        if (this.instance === undefined || this.instance.removeListener === undefined || this.instance.removeListener === null) {
            log.error("SerializedIpc instance don't have removeListener method. instance=", this.instance);
            return;
        }
        this.instance.removeListener(channel, listener);
    }

    private getWrappedListener<T>(eventName: string, once: boolean, target: T, listener: (e: any, ...args: any[]) => Promise<void>): IWrapper<T> {
        const state: WrapperState<T> = { fired: false, eventName, listener, once, target, serializedIpc: this };
        // Nodejs.EventEmitter uses wrapper.listener to handle wrapping. See https://github.com/nodejs/node/blob/eabe22b73371e59838f5ff501804aca3aae9f4a9/lib/events.js#L428
        const wrapped = wrapper.bind(state) as IWrapper<T>;
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
    }
}

interface WrapperState<T> {
    fired: boolean;
    eventName: string;
    listener: (e: any, ...args: any[]) => Promise<void>;
    once: boolean;
    serializedIpc: ElectronIpc;
    target: T;
    wrapFn?: () => Promise<void>;
}

interface IWrapper<T> {
    (this: WrapperState<T>): Promise<void>;
    listener: (e: any, ...args: any[]) => Promise<void>;
}

async function wrapper<T>(this: WrapperState<T>) {
    if (this.once && this.fired) {
        return;
    }
    if (this.once && this.wrapFn !== undefined) {
        this.serializedIpc.removeListener(this.eventName, this.wrapFn);
        this.fired = true;
    }
    // @ts-ignore
    const [e, ...args] = [...arguments];
    const nargs: any[] = [];
    for (const v of args) {
        const [err, res] = this.serializedIpc.unSerialize(v);
        if (err !== undefined) {
            // log.error("SerializedIpc on unSerialize failed. err=", err, ", v=", v);
            nargs.push(v);
        } else {
            nargs.push(res);
        }
    }
    try {
        await this.listener.apply(this.target, [e, ...nargs]);
    } catch (e) {
        log.error("run ipc listener catch exception, event name=", this.eventName, "e=", e.toString());
        throw e;
    }
}

// export const serializedIpc: ElectronIpc = (() => {
//     if (isWeb()) {
//         log.info("isWeb, init serialized ipc with empty");
//         return new ElectronIpc({});
//     } else if (isNode()) {
//         const { ipcMain } = require("electron");
//         log.info("isNode, init serialized ipc with ipcMain");
//         return new ElectronIpc(ipcMain);
//     } else if (isRenderer()) {
//         const { ipcRenderer } = require("electron");
//         log.info("isRenderer, init serialized ipc with ipcRender");
//         return new ElectronIpc(ipcRenderer);
//     } else {
//         const { ipcMain } = require("electron");
//         log.info("isMain, init serialized ipc with ipcMain");
//         return new ElectronIpc(ipcMain);
//     }
// })();
