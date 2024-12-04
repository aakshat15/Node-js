const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req , res) =>{

    console.log('By request',req.url);
    fs.appendFileSync('logfile.txt' , `${Date.now()}  New Requiest \n` , (err,r) =>{
        res.end('hlw From server');
    })
})
myServer.listen(8000,()=> console.log('localhost:8000')
)