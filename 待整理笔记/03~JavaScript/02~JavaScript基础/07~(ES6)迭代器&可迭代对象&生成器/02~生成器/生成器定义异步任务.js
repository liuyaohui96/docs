function run(taskDef) {
  // create the iterator, make available elsewhere
  let task = taskDef();

  // start the task
  let result = task.next();

  // recursive function to keep calling next()
  function step() {
    // if there's more to do
    if (!result.done) {
      if (typeof result.value === 'function') {
        // 调用这个函数，并且参数是一个回调函数
        result.value(function(err, data) {
          if (err) {
            result = task.throw(err);
            return;
          }

          result = task.next(data);
          step();
        });
      } else {
        result = task.next(result.value);
        step();
      }
    }
  }

  // start the process
  step();
}

// =====
let fs = require('fs');

function readFile(filename) {
  return function(callback) {
    fs.readFile(filename, callback);
  };
}

run(function*() {
  let contents = yield readFile('./config.txt');
  doSomethingWith(contents);
  console.log('Done');
});

function doSomethingWith(contents) {
  console.log(contents);
}
