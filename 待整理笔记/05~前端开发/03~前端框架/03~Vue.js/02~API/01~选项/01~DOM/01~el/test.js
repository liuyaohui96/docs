// 在回调内部调用一个取消侦听的函数，应该先检查unwatch的可用性
var unwatch = vm.$watch(
  'value',
  function() {
    doSomething();
    if (unwatch) {
      unwatch();
    }
  },
  { immediate: true }
);
