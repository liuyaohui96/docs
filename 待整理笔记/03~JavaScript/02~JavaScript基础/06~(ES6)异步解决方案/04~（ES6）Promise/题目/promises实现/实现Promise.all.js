/*
如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
如果传入的参数不包含任何 promise，则返回一个异步完成.
promises 中所有的promise都“完成”时或参数中不包含 promise 时回调完成。
如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
*/

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let index = 0
    let result = []
    if (promises.length === 0) {
      resolve(result)
    } else {
      function processValue(i, data) {
        result[i] = data
        if (++index === promises.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < promises.length; i++) {
        //promises[i] 可能是普通值
        Promise.resolve(promises[i]).then(
          data => {
            processValue(i, data)
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
