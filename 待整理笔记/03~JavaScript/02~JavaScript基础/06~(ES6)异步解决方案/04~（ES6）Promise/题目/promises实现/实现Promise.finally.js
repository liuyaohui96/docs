/* 
不管成功还是失败，都会走到finally中,并且finally之后，
还可以继续then。并且会将值原封不动的传递给后面的then
*/
Promise.prototype.finally = function(callback) {
  return this.then(
    value => {
      return Promise.resolve(callback()).then(() => {
        return value
      })
    },
    err => {
      return Promise.resolve(callback()).then(() => {
        throw err
      })
    }
  )
}
s
