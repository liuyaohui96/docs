
## errorCaptured
捕获来自子孙组件的错误时被调用，钩子接受三个参数：
* error：错误对象
* component instance： 发生错误的组件实例
* a string nformation about error：包含错误来源信息的字符串

可以通过返回false防止错误往上继续传播


## 错误传播规则(error propagation rules)
* 默认情况下，所有的error发送到全局的`config.errorHandler`
* 如果一个组件的继承或父级从属链路中存在多个 errorCaptured 钩子，则它们将会被相同的错误逐个唤起
* 如果此 errorCaptured 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 config.errorHandler。
* 如果errorCaptured本身发生错误，这个error和原来捕获的error都会发送到全局的`config.errorHandler`
* errorCaptured 可以返回false防止错误继续向上传播，这意味着“错误被处理，或错误被忽略“，它会阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler。