process.stdin.on('data', d => {
    console.log(d.toString().split(' ').map(Number).reduce((x, y) => x+y, 0))
})