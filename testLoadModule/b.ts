export default class B {
    b: string;
    constructor() {
        console.log('init b :>> ');
        this.b = '123'
    }

    funcB() {
        console.log('this.b :>> ', this.b);
    }
}