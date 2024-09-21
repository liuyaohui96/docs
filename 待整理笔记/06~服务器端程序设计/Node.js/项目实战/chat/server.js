const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime'); // according extension, get mime type
const cache = {}; // cache file

// create http server
const server = http.createServer((req, res) => {
  let filePath; // record file path
  if (req.url == '/') {
    filePath = 'public/index.html';
  } else {
    filePath = `public${req.url}`;
  }
  serverStatic(res, cache, filePath);
});

server.listen(3000, () => {
  console.log('server start');
});

// serverStatic
function serverStatic(res, cache, filePath) {
  if (cache[filePath]) {
    // if filePath is cached, use sendFile()
    sendFile(res, filePath, cache[filePath]);
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) send404(res);
      else {
        cache[filePath] = data;
        sendFile(res, filePath, data);
      }
    });
  }
}

// send404
function send404(res) {
  res.writeHead(404, {
    'content-type': 'text/plain'
  });
  res.write('404 not found');
  res.end();
}

// sendFile
function sendFile(res, filePath, fileContent) {
  res.writeHead(200, {
    'content-type': mime.getType(path.basename(filePath))
  });
  res.write(fileContent);
  res.end();
}

const chatServer = require('./lib/chat_server');
chatServer.listen(server);
