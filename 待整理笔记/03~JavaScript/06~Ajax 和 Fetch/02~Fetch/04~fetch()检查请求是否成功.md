
## 检查fetch请求是否成功
如果遇到网络故障，fetch() promise 将会 reject，带上一个 TypeError 对象。虽然这个情况经常是遇到了权限问题或类似问题——比如 404 不是一个网络故障。想要精确的判断 fetch() 是否成功，需要包含 promise resolved 的情况，此时再判断 Response.ok 是不是为 true

```js
fetch('flowers.jpg')
  .then(response => {
    if (response.ok) {
      return response.blob();
    }
    throw new Error('Network response was not ok.');
  })
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  })
  .catch(error => {
    console.log(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  });
```