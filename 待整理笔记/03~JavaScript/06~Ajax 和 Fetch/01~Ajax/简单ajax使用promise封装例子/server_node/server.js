const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url == '/testAjax') {
    let data = fs.readFile('data.json', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log('server listen at port 3000...');
});
