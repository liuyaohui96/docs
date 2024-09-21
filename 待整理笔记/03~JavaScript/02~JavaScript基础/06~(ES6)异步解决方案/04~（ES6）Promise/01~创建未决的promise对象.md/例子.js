// Node.js example
let fs = require('fs');

function readFile(filename) {
  return new Promise(function(resolve, reject) {
    // trigger the asynchronous operation
    fs.readFile(filename, { encoding: 'utf8' }, function(err, contents) {
      // check for errors
      if (err) {
        reject(err);
        return;
      }

      // the read succeeded
      resolve(contents);
    });
  });
}

let promise = readFile('example.txt');
// listen for both fulfillment and rejection
promise.then(
  function(contents) {
    // fulfillment
    console.log(contents);
  },
  function(err) {
    // rejection
    console.error(err.message);
  }
);
