//FIRST ADD COMMAND NPM I URL

const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer =http.createServer((req,res) =>{
    if(req.url === '/favicon.ico') return res.end()
        const log = `${Date.now()}  ${req.method}  ${req.url}  NEW REQUEST\n`
        const myUrl = url.parse(req.url,true)   
        console.log(myUrl);
        fs.appendFile('logSwitch.txt' , log , (err,response) =>{
       switch(myUrl.pathname){

        case '/' :
            if(req.method === 'Get') res.end('<h1>home</h1>')
        break;

        case '/about' :
            const username  = myUrl.query.name;
             res.end(`hi username is ${username}`);
        break;

        case '/contact' : res.end('Contact')
        break;
        
        case '/search' :
            const search_query = myUrl.query.search_query;
            res.end(`<h1>here is your result ${search_query}</h1>`);
        break;

        case '/form' :
            if(req.method === 'GET') res.end('<h1>This is form</h1>')
            else if(req.method === 'POST') {
            //DB Query to add the data
            res.end(`<h1>This is</h1>`)
        }


        default : res.end('404 Error')
       }
    })
})  
myServer.listen(9000 , () => console.log('http://localhost:9000'))