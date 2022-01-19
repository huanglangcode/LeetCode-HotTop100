import { EventEmitter } from "stream";

const log = console;

export class SerializedIpc {
    public instance;
    constructor(ipcInstance: EventEmitter) {
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
    };

    public unSerialize = (str: string): [Error | undefined, any] => {
        try {
            const res = JSON.parse(str);
            return [undefined, res];
        } catch (e) {
            return [e, undefined];
        }
    };

    public send = (channel: string, ...args: any[]) => {
        if (
            this.instance === undefined ||
            this.instance.emit === undefined ||
            this.instance.emit === null
        ) {
            log.error(
                "SerializedIpc instance don't have send method. instance=",
                this.instance
            );
            return;
        }
        // const nargs: string[] = [];
        // for (const v of args) {
        //     const [err, res] = this.serialize(v);
        //     if (err !== undefined) {
        //         log.error("SerializedIpc send serialize failed. err=", err);
        //         return;
        //     }
        //     nargs.push(res);
        // }
        // if (process.env.NODE_ENV === "production") {
        //     log.debug("serialized ipc send:", channel, nargs);
        // }
        console.log('channel , args :>> ', channel, args);
        this.instance.emit(channel, ...args);
    };

    public sendSync = (channel: string, ...args: any[]): Promise<any> | any => {
        if (
            this.instance === undefined ||
            this.instance.sendSync === undefined ||
            this.instance.sendSync === null
        ) {
            log.error(
                "SerializedIpc instance don't have sendSync method. instance=",
                this.instance
            );
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
    };

    public on = (channel: string, listener: (...args) => void) => {
        if (
            this.instance === undefined ||
            this.instance.on === undefined ||
            this.instance.on === null
        ) {
            log.error(
                "SerializedIpc instance don't have on method. instance=",
                this.instance
            );
            return;
        }

        // const wrapped = this.getWrappedListener(
        //     channel,
        //     false,
        //     this,
        //     listener as any
        // );
        this.instance.on(channel, listener);
    };

    public once = (channel: string, listener: (...args) => void) => {
        if (
            this.instance === undefined ||
            this.instance.once === undefined ||
            this.instance.once === null
        ) {
            log.error("SerializedIpc instance don't have once method. instance=", this.instance);
            return;
        }

        // const wrapped = this.getWrappedListener(
        //     channel,
        //     true,
        //     this,
        //     listener as any
        // );
        this.instance.on(channel, listener);
    };

    public removeAllListeners = (channel: string) => {
        if (
            this.instance === undefined ||
            this.instance.removeAllListeners === undefined ||
            this.instance.removeAllListeners === null
        ) {
            log.error(
                "SerializedIpc instance don't have removeAllListeners  method. instance=",
                this.instance
            );
            return;
        }
        this.instance.removeAllListeners(channel);
    };

    public removeListener = (channel: string, listener: (e, ...args) => void) => {
        if (
            this.instance === undefined ||
            this.instance.removeListener === undefined ||
            this.instance.removeListener === null
        ) {
            log.error(
                "SerializedIpc instance don't have removeListener method. instance=",
                this.instance
            );
            return;
        }
        this.instance.removeListener(channel, listener);
    };

    private getWrappedListener<T>(
        eventName: string,
        once: boolean,
        target: T,
        listener: (e: any, ...args: any[]) => Promise<void>
    ): IWrapper<T> {
        const state: WrapperState<T> = {
            fired: false,
            eventName,
            listener,
            once,
            target,
            serializedIpc: this,
        };
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
    serializedIpc: SerializedIpc;
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
        const [err, res] = serializedIpc.unSerialize(v);
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
        log.error(
            "run ipc listener catch exception, event name=",
            this.eventName,
            "e=",
            e.toString()
        );
        throw e;
    }
}

export const serializedIpc: SerializedIpc = (() => {
    // if (isWeb()) {
    //     log.info("isWeb, init serialized ipc with empty");
    //     return new SerializedIpc({});
    // } else if (isNode()) {
    //     const { ipcMain } = require("electron");
    //     log.info("isNode, init serialized ipc with ipcMain");
    //     return new SerializedIpc(ipcMain);
    // } else if (isRenderer()) {
    //     const { ipcRenderer } = require("electron");
    //     log.info("isRenderer, init serialized ipc with ipcRender");
    //     return new SerializedIpc(ipcRenderer);
    // } else {
    //     const { ipcMain } = require("electron");
    //     log.info("isMain, init serialized ipc with ipcMain");
    //     return new SerializedIpc(ipcMain);
    // }

    // 默认搞个server端玩玩
    const eventHandler = new EventEmitter()
    return new SerializedIpc(eventHandler)
})();
