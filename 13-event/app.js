const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('geonil', callback1);

emitter.on('geonil', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('geonil', { message: 1 });
emitter.emit('geonil', { message: 2 });
emitter.removeAllListeners();
emitter.emit('geonil', { message: 3 });