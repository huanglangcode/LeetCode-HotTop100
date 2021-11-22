export default class C {
    c: string;
    constructor() {
        console.log('init c :>> ');
        this.c = '123'
    }

    funcC() {
        console.log('this.c :>> ', this.c);
    }
}