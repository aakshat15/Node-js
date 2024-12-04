//ECMA Model is to import 
import event from 'events';


const eventEmitter = new event();
eventEmitter.on('data' , () =>{
    console.log('Data event captured....');
});
eventEmitter.on('finish' , ()=>{
    console.log('Finish event captured..');
});
eventEmitter.on('end' , ()=>{
    console.log('end event captured...');
})
eventEmitter.on('error' , () => {
    console.log('Error Event captured..');
})

eventEmitter.emit('data');
eventEmitter.emit('first');
eventEmitter.emit('end');
eventEmitter.emit("error");