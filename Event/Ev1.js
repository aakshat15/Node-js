const eventEmitter = require('events');  //IMPORT EVENTTEMITTER
const myEmitter = new eventEmitter();   //CREATE AN INSTANCE

//REGISTER AN EVENT LISTNER
myEmitter.on('greet', () =>{
    console.log('Hello , world');
})

//EMIT THE EVENT
myEmitter.emit('greet');