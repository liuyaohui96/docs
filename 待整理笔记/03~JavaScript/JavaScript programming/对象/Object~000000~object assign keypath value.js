// 实现一个函数， 该函数接收一个obj， 一个path， 一个value，
// 实现obj[path] = value, obj类似json格式

function assignKeyPath(obj, path, value) {
  const keyArr = path.split('.');
  let assign = obj; // 指向最外层的对象引用
  while (keyArr.length > 0) {
    let key = keyArr.shift();
    if (keyArr.length === 0) {
      assign[key] = value;
      break;
    }
    // 返回当前层的对象引用
    assign = typeof assign[key] === 'object' ? assign[key] : (assign[key] = {});
  }
  return obj;
}

const obj = assignKeyPath({}, 'aa.bb.cc', 'hello');
const obj1 = assignKeyPath({ aa: { dd: 1 } }, 'aa.bb.cc', 'hello');
const obj2 = assignKeyPath({ aa: 1 }, 'aa.bb.cc', 'hello');
console.log(`obj ${JSON.stringify(obj)}`);
console.log(`obj ${JSON.stringify(obj1)}`);
console.log(`obj ${JSON.stringify(obj2)}`);
