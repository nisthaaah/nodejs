import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>{
    console.log('Please turn off the motor. Its a gentle reminder!!')
  },
  4000);
});
myEmitter.emit('Waterfull'); //When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously