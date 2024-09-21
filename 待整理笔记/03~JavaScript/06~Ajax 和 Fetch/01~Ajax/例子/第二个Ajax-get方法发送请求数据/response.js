let http = require('http');
let url = require('url');

http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let query = url.parse(req.url, true).query;
    res.write(`welcome ${query.name}`);
    res.end();
  })
  .listen(5500, 'localhost', () => {
    console.log('listen to port 5500...');
  });
