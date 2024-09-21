function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`)
    setTimeout(() => {
      console.log('execute')
      resolve()
    }, time * 1000)
  })
}

const arr = [3, 4, 5]

arr.reduce((s, v) => {
  return s.then(() => delay(v))
}, Promise.resolve())
