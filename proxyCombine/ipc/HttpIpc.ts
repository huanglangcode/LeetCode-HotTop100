import { BaseIpc } from "./BaseIpc";

class HttpIpc extends BaseIpc {
    send(...args: any) {
        throw new Error("Method not implemented.");
    }
    sendSync(...args: any) {
        throw new Error("Method not implemented.");
    }
    on(...args: any) {
        throw new Error("Method not implemented.");
    }
    once(...args: any) {
        throw new Error("Method not implemented.");
    }
    removeAllListeners(channel: string) {
        throw new Error("Method not implemented.");
    }
}