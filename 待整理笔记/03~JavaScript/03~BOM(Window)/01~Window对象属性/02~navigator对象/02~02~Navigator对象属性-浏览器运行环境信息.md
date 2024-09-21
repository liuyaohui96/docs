
## Navigator对象属性-其他
1. NavigatorConcurrentHardware.hardwareConcurrency 返回当前浏览器环境所拥有的CPU核心数

    ```js
    // === 根据浏览器环境CPU核心数量建立worker
    let workerList = [];

    for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
    let newWorker = {
        worker: new Worker('cpuworker.js'),
        inUse: false
    };
    workerList.push(newWorker);
    }
    ```

2. Navigator.platform 返回表示浏览器平台的字符串。该规范允许浏览器始终返回空字符串，因此不要依赖此属性来获得可靠的答案。例如`"Win32"`