const open = require('open');

(async () => {
    let childProcess = await open("D:\\bug\\lockFolder\\test.txt");
    console.log('childProcess :>> ', childProcess);
    await new Promise(resolve => setTimeout(resolve, 10000));
})();