```JavaScript
const http=require('http');
const server=http.createServer((req, res) => {
    if(req.url==='/'){
        res.write('hello world');
        res.end();
    }

    if(req.url==='/api/course'){
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

server.listen(3000);

console.log('listen on port 3000...');

```

# 原文
this server is an evetn emitter