const ffi = require('ffi-napi');

function showText(text) {
    return new Buffer(text, 'ucs2').toString('binary');
}

const myUser32 = new ffi.Library('user32', {
    MessageBoxW: [
        'int32', ['int32', 'string', 'string', 'int32']
    ]
});

const isOk = myUser32.MessageBoxW(0, showText('I am Node.JS!'), showText('Hello, World!'), 1);
console.log('isOk :>> ', isOk);