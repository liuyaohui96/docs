// 浅拷贝就是把属于源对象的值都复制一遍到新的对象,不会开辟两者独立的内存区域

//  es6 使用 Object.assign(target, ...sources)

// ES5 -----------------------------------------------
function shallowCopy(srcObj) {
  // srcObj 为空或者不为object，结束
  if (!srcObj || typeof srcObj !== 'object') return;

  let targetObj = {};
  for (let key in srcObj) {
    if (srcObj.hasOwnProperty(key)) {
      targetObj[key] = srcObj[key];
    }
  }
  return targetObj;
}

let srcObj = {
  name: 'liu',
  age: 50
};

let targetObj = shallowCopy(srcObj);
console.log(targetObj);
