// 只要 new 一个 Vue 对象，就会将 data 中的数据进行追踪变化
class Vue {
  /* Vue构造类 */
  constructor(options) {
    this._data = options.data;
    observer(this._data);
  }
}
