// server2.js(http://localhost:3000)
const http = require('http');
const data = { title: 'fontend', password: '123456' };
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('From server2:' + JSON.stringify(data));
  }
});
server.listen(4000, () => {
  console.log('The server is running at http://localhost:3000');
});
