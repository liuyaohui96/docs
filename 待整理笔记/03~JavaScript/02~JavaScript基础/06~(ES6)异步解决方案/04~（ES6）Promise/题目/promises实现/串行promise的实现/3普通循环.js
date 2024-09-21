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

let p = Promise.resolve()
for (const i of arr) {
  p = p.then(() => delay(i))
}
