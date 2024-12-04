const http = require('http');
const fs = require('fs');

const myServer =http.createServer((req,res) =>{
    console.log('New Request');
    // fs.appendFile('logSwitch.txt' , `${Date.now()}\n` , (err,response) =>{
       switch(req.url){
        case '/' : res.end('<h1>home</h1>')
        break;
        case '/about' : res.end('about');
        break;
        case '/contact' : res.end('Contact')
        break;
        default : res.end('404 Error')
       }
    // })
})  
myServer.listen(9000 , () => console.log('http://localhost:2000'))