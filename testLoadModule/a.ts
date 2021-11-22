export default class A {
    a: string;
    constructor() {
        console.log('init A :>> ');
        this.a = '123'
    }

    funcA() {
        return `'this.a :>> ', ${this.a}`;
    }
}


export const GitDescriptor = {
    channel: "git_manager",
    properties: {
        checkGitInstall: "string",
        checkIsRepo: "string",
        getConfig: "string",
        setConfig: "string",
        initRepo: "string",
        status: "string",
        addAndCommit: "string",
        getLog: "string",
    },
};