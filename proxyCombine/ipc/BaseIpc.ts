export abstract class BaseIpc {
    public instance;
    constructor(ipcInstance) {
        this.instance = ipcInstance;
    }
    abstract send(...args: any): any;
    abstract sendSync(...args: any): any;
    abstract on(...args: any): any;
    abstract once(...args: any): any;
    abstract removeAllListeners(channel: string): any
}