
# promise

## done, fail, always
done 会在 promise 解决时调用，fail 会在 promise 拒绝时调用，always 总会调用。
```js
// jQuery
$promise.done(doneCallback).fail(failCallback).always(alwaysCallback)

promise.then(doneCallback, failCallback).then(alwaysCallback, alwaysCallback)
```

## when
when 用于处理多个 promises。当全部 promises 被解决时返回，当任一 promise 被拒绝时拒绝
```js
$.when($promise1, $promise2).done((promise1Result, promise2Result) => {
});

Promise.all([$promise1, $promise2]).then([promise1Result, promise2Result] => {});
```

## Deferred
Deferred 是创建 promises 的一种方式。待理解