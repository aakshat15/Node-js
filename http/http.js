const http = require('http');

const myServer = http.createServer((req,res) => {
    console.log('New Request');

    res.end('Hellow Fro Server')
})
myServer.listen(8008,() => console.log('Server Started')
)