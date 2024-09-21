
## http.createServer()
http.createServer([options][, requestlistener])

1. arguments
  * options 
    * IncomingMessage `<http.IncomingMessage> `
    * ServerResponse `<http.ServerResponse>`

2. return
  * `<http.Server>` -> Returns a new instance of http.Server.
  

## response.write()
response.write(chunk[, encoding][, callback])
1. arguments
  * chunk `<string>` | <Buffer>
  * encoding `<string>` Default: 'utf8'
  * callback <Function>

2. return
  * Returns: `<boolean>`

> If this method is called and response.writeHead() has not been called, it will switch to implicit header mode and flush the implicit headers


## response.writeHead()
http.createServer([options][, requestlistener])

1. arguments
  * statusCode `<number>`
  * statusMessage `<string>`
  * headers `<Object>`

2. return
  * `<http.Server>` -> Returns a new instance of http.Server.

## response.end([data][, encoding][, callback])
1. arguments
  * data `<string>` | <Buffer>      
    If data is specified, it is similar in effect to calling response.write(data, encoding) followed by response.end(callback)
  * encoding `<string>`
  * callback `<Function>`  
    If callback is specified, it will be called when the response stream is finished

2. return
  * Returns: `<this>`


> response.end(), MUST be called on each response.
> all of the response headers and body have been sent


