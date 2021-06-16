// process.stdin.on('readable', () => {
//     var chunk = process.stdin.read();
//     console.log('chunk :>> ', chunk);
//     eval(chunk.toString());
// });

var fs = require('fs');

fs.writeFileSync('a.txt', "This is a file");
fs.writeFileSync('b.txt', "This is another file");

fs.rename('a.txt', 'b.txt', function (err) {
    console.log("error code is " + err);
});

// fs.renameSync('a.txt', 'b.txt');

var text = fs.readFileSync('b.txt', "utf-8");

console.log(text);