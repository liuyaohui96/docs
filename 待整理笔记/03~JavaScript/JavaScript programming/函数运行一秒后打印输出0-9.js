function print() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000)
  }
}

// 非es6方法
function print2() {
  for (var i = 0; i < 10; i++) {
    setTimeout(
      (function(i) {
        return function() {
          console.log(i)
        }
      })(i),
      1000
    )
  }
}

print()
print2()
