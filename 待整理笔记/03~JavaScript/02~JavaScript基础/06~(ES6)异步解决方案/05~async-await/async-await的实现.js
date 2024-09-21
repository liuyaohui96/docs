// async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里
function my_co(it) {
  return new Promise((resolve, reject) => {
    function next(data) {
      try {
        var { value, done } = it.next(data)
      } catch (e) {
        return reject(e)
      }
      if (!done) {
        //done为true,表示迭代完成
        //value 不一定是 Promise，可能是一个普通值。使用 Promise.resolve 进行包装。
        Promise.resolve(value).then(val => {
          next(val)
        }, reject)
      } else {
        resolve(value)
      }
    }
    next() //执行一次next
  })
}
function* test() {
  yield new Promise((resolve, reject) => {
    setTimeout(resolve, 100)
  })
  yield new Promise((resolve, reject) => {
    // throw Error(1);
    resolve(10)
  })
  yield 10
  return 1000
}

my_co(test())
  .then(data => {
    console.log(data) //输出1000
  })
  .catch(err => {
    console.log('err: ', err)
  })
