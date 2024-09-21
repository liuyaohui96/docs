function mySetInterval(fn, ms) {
  function inner() {
    setTimeout(inner, ms)
    fn()
  }
  setTimeout(inner, ms)
}

let i = 1
mySetInterval(() => console.log(i++), 1000)
