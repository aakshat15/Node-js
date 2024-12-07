import event from 'events';

const eventEmitter = new event;

eventEmitter.on('addition' , (a,b) => {
    // return a+b;
    console.log('2 addition:' ,a+b);
})
eventEmitter.on('addition' , (a,b,c) => {
    console.log('3 addition:',a+b+c);
})
const result = eventEmitter.emit('addition' ,10,20); //2.30   3.NAN
eventEmitter.emit('addition' , 20,30,40)   //2.50   3.90
// console.log(result);//Return true
