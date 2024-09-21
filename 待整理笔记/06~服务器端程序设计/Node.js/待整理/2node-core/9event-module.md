```JavaScript
[const EventEmitter=require('events'); // is a class, not a function
const emitter= new EventEmitter();

// register a listener
emitter.on('messageLogged', (e) => {
    console.log('listener call');
});

// raise an event
emitter.emit('messageLogged');

// when the event raise, the on will excute the callback

](const EventEmitter=require('events'); // is a class, not a function
const emitter= new EventEmitter();

// register a listener
// e is receive the event argumens
emitter.on('messageLogged', (e) => {
    console.log('listener call',e );
});

// raise an event
// the second argument is event arguments
emitter.emit('messageLogged', {id:1, url:'https://github.com'});

// when the event raise, the on will excute the callback)
```

# 原文
like http that we used to build a web server, we listen on a given port,
and every time we receive a request on that port, http class raise an event

our job is to respond to that event which basically involves reading reading that
requires and returning the right response

```JavaScript
const EventEmitter=require('events'); // is a class, not a function
const emitter= new EventEmitter();
```