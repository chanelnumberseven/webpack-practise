import path from 'path'
import url from 'url'
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发事件');
});
myEmitter.emit('event');
export function doSomething(){
    console.log(path.join('./handle/','./src'));
    console.log(url.parse(location.href))
}