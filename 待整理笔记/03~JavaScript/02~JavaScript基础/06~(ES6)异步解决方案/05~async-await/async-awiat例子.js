// === promise
/*
fetch('https://blog.csdn.net/')
  .then(response => {
    console.log(response)
    return fetch('https://juejin.im/')
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
*/

// === 相当于上面promise方案的 async + await 方案
async function foo() {
  try {
    let response1 = await fetch('https://blog.csdn.net/');
    console.log(response1);
    let response2 = await fetch('https://juejin.im/');
    console.log(response2);
  } catch (err) {
    console.error(err);
  }
}
foo();
