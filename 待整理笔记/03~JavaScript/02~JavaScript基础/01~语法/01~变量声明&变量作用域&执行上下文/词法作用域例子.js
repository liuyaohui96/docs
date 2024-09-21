var x = 10
function fn() {
  console.log(x)
}

function show(f) {
  var x = 20
  f()
}

show(fn) // 10
