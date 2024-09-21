// 另外的方案
// Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})

function deepClone(obj) {
  //递归拷贝
  if (typeof obj !== 'object') {
    //如果不是复杂数据类型，直接返回
    return obj
  }
  if (obj === null) return null //null 的情况

  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)

  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   */
  let t = new obj.constructor()
  for (let key in obj) {
    //如果 obj[key] 是复杂数据类型，递归
    t[key] = deepClone(obj[key])
  }
  return t
}
