process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    console.log('chunk :>> ', chunk);
    eval(chunk.toString());
});