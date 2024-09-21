// 实现函数range([start,]stop[,step])返回一个数组（step大于1）

// range(1,11); => [1,2,3,4,5,6,7,8,9,10]
// range(0); => []
// range(10); => [0,1,2,3,4,5,6,7,8,9]
// range(0,30,5); => [0,5,10,15,20,25]

function range(...arg) {
  let argLength = arg.length
  let result = []
  if (argLength === 1) {
    if (arg[0] === 0) return []
    for (let i = 0; i < arg[0]; i++) {
      result.push(i)
    }
    return result
  }

  if (argLength === 2) {
    for (let i = arg[0]; i < arg[1]; i++) {
      result.push(i)
    }
    return result
  }

  if (argLength === 3) {
    for (let i = arg[0]; i < arg[1]; i += arg[2]) {
      result.push(i)
    }
    return result
  }
}

console.log(range(1, 11))
console.log(range(0))
console.log(range(10))
console.log(range(0, 30, 5))
