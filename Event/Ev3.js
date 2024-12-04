import event from 'events';
const eventEmitter = new event();

eventEmitter.once('Test' , () => {
    console.log('Test event captured...');
})
eventEmitter.on('demo' , () => {
    console.log('Demo event captured...');
});

eventEmitter.emit('Test');
eventEmitter.emit('demo');
eventEmitter.emit('demo');
eventEmitter.removeAllListeners('demo');
eventEmitter.emit('demo');
eventEmitter.emit('Test');