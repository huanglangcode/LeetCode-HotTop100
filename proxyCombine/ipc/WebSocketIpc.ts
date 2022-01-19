import { BaseIpc } from "./BaseIpc";
const log = console

export class WebSocketIpc extends BaseIpc {
    constructor(ipcInstance) {
        super(ipcInstance);
    }

    public serialize = (arg: any): [Error | undefined, string] => {
        try {
            const res = JSON.stringify(arg);
            return [undefined, res];
        } catch (e) {
            return [e, ""];
        }
    }

    public unSerialize = (str: string): [Error | undefined, any] => {
        try {
            const res = JSON.parse(str);
            return [undefined, res];
        } catch (e) {
            return [e, undefined];
        }
    }

    public send = (channel: string, ...args: any[]) => {
        if (this.instance === undefined || this.instance.send === undefined || this.instance.send === null) {
            log.error("WebSocketIpc instance don't have send method. instance=", this.instance);
            return;
        }
        const nargs: string[] = [];
        for (const v of args) {
            const [err, res] = this.serialize(v);
            if (err !== undefined) {
                log.error("WebSocketIpc send serialize failed. err=", err);
                return;
            }
            nargs.push(res);
        }
        // console.log('channel, args, nargs :>> ', channel, args, nargs);
        let webSocketArgs = JSON.stringify([channel, ...args])
        console.log('webSocketArgs :>> ', webSocketArgs);
        this.instance.send(webSocketArgs);
    }

    public sendSync = (channel: string, ...args: any[]): Promise<any> | any => {
        if (this.instance === undefined || this.instance.sendSync === undefined || this.instance.sendSync === null) {
            log.error("WebSocketIpc instance don't have sendSync method. instance=", this.instance);
            return;
        }
        const nargs: string[] = [];
        for (const v of args) {
            const [err, res] = this.serialize(v);
            if (err !== undefined) {
                log.error("WebSocketIpc sendSync serialize failed. err=", err);
                return;
            }
            nargs.push(res);
        }
        return this.instance.sendSync(channel, ...nargs);
    }

    public on = (channel: string, listener: (...args) => void) => {
        this.instance.addEventListener("message", (event) => {
            let params = event.data
            try {
                params = JSON.parse(params)
            } catch (error) { }
            console.log('main data to String :>> ', params);
            this.instance.emit(params[0], ...[{ sender: this.instance }, params[1], params[2]])
        })
        // this.instance.on("message", (data: Buffer) => {
        //     let params = data.toString()
        //     try {
        //         params = JSON.parse(params)
        //     } catch (error) { }
        //     console.log('main data to String :>> ', params);
        //     this.instance.emit(params[0], ...[{ sender: this.instance }, params[1], params[2]])
        // })
        this.instance.on(channel, listener);
    }

    public once = (channel: string, listener: (...args) => void) => {
        this.instance.addEventListener("message", (event) => {
            let params = event.data
            try {
                params = JSON.parse(params)
            } catch (error) { }
            console.log('renderer data to String :>> ', params);
            this.instance.emit(params[0], params[1])
        })

        // this.instance.on("message", (data: Buffer) => {
        //     let params = data.toString()
        //     try {
        //         params = JSON.parse(params)
        //     } catch (error) { }
        //     console.log('renderer data to String :>> ', params);
        //     this.instance.emit(params[0], params[1])
        // })
        this.instance.once(channel, listener);
    }

    public removeAllListeners = (channel: string) => {
        if (this.instance === undefined || this.instance.removeAllListeners === undefined || this.instance.removeAllListeners === null) {
            log.error("WebSocketIpc instance don't have removeAllListeners  method. instance=", this.instance);
            return;
        }
        this.instance.removeAllListeners(channel);
    }

    public removeListener = (channel: string, listener: (e, ...args) => void) => {
        if (this.instance === undefined || this.instance.removeListener === undefined || this.instance.removeListener === null) {
            log.error("WebSocketIpc instance don't have removeListener method. instance=", this.instance);
            return;
        }
        this.instance.removeListener(channel, listener);
    }
}

// export const WebSocketIpc: ElectronIpc = (() => {
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
