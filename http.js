const  http = require('http')

const serv1 = http.createServer((req,res) => {
    res.end("working")
})