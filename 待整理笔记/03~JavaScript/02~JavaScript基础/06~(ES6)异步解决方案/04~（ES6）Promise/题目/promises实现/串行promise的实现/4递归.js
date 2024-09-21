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

function dispatch(i, p = Promise.resolve()) {
  if (!arr[i]) return Promise.resolve()
  return p.then(() => dispatch(i + 1, delay(arr[i])))
}
dispatch(0)
