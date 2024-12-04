import event from 'events';

const eventEmitter = new event();

eventEmitter.on('addtion' , (a,b) => {
    let result = a+b;
    console.log("ADDITON:" ,result);
})

eventEmitter.emit('addtion',20,15);