```JavaScript
const EventEmitter=require('events');
class Logger extends EventEmitter{
    log(message){
        console.log(message);

        // raise an event
        this.emit('messageLogged', {id:1, url:'https://'});
    }
}

const logger=new Logger();
logger.on('messageLogged', (e) => {
    console.log('listenner called', e);
})
logger.log('message');

```

# 原文
you would not work with this event emitter object directly,
instead you want to create a class that has all the capabilities of the event emitter

and then you will use that calss in your code


if you want to raise an event in your application to signal that something has
happend, you need to create a class that extends event emitter