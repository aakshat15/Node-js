const fs =require('fs')

try{
    let a = fs.readFileSync('testt.txt' , 'UTF-8')
    console.log(a);
    console.log('end the containt');
    }catch(err){
            console.log(err);
    }