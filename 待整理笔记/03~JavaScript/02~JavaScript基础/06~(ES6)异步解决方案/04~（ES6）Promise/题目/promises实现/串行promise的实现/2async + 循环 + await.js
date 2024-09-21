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

;(async function() {
  for (const v of arr) {
    await delay(v)
  }
})()
