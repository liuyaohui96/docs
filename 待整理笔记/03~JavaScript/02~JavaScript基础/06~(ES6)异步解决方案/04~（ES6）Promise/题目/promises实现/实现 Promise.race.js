/*

了解 Promise.race 的特点：
Promise.race返回的仍然是一个Promise.
1. 它的状态与第一个完成的Promise的状态相同。
它可以是完成（ resolves），也可以是失败（rejects），
这要取决于第一个Promise是哪一种状态。

2. 如果传入的参数是不可迭代的，那么将会抛出错误。

3. 如果传的参数数组是空，那么返回的 promise 将永远等待。

4. 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，
则 Promise.race 将解析为迭代中找到的第一个值。
*/

Promise.race = function(promises) {
  //promises 必须是一个可遍历的数据结构，否则抛错
  return new Promise((resolve, reject) => {
    if (typeof promises[Symbol.iterator] !== 'function') {
      //真实不是这个错误
      Promise.reject('args is not iteratable!')
    }
    if (promises.length === 0) {
      return
    } else {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          data => {
            resolve(data)
            return
          },
          err => {
            reject(err)
            return
          }
        )
      }
    }
  })
}

// ------- 测试代码
//一直在等待态
Promise.race([]).then(
  data => {
    console.log('success ', data)
  },
  err => {
    console.log('err ', err)
  }
)
//抛错
Promise.race().then(
  data => {
    console.log('success ', data)
  },
  err => {
    console.log('err ', err)
  }
)
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100)
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200)
    }, 200)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(100)
    }, 100)
  })
]).then(
  data => {
    console.log(data)
  },
  err => {
    console.log(err)
  }
)
