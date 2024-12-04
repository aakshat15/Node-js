const fs =require('fs')


// fs.writeFile('testt.txt' , 'newFile by writeFile' , ()=> console.log('done with write'))
//    console.log('Suceess');

// fs.writeFileSync('txt.txt' , 'newTXTfileWithSync')
// console.log('Completely Write with Sync');

try{
        
let a = fs.readFileSync('testt.txt' , 'UTF-8')
console.log(a);
console.log('end the containt');
}
catch(err){
        console.log(err);
}


   
    
