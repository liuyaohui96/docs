/*
C
E
D
A
B
 */
// macrotask ['A', 'B']
// microtask ['D']
setTimeout(() => {
  console.log('A');
}, 0);
var obj = {
  func: function() {
    setTimeout(function() {
      console.log('B');
    }, 0);
    return new Promise(function(resolve) {
      console.log('C');
      resolve();
    });
  }
};
obj.func().then(function() {
  console.log('D');
});
console.log('E');
