// 接受两个对象参数：第一个是食谱，第二个是可用食材。
// 每个食材的值是一个数字代表有多少单位
// 须有所有足够可用的食材，大于或等于所需的单位数量

let recipe = { milk: 2, sugar: 40, butter: 20 }
let available = { milk: 5, sugar: 120, butter: 500 }

// 1. object.keys(obj)  得到属性数组，然后使用map计算各自可以制造的食材份数
// 2. Math.min 获得其中最小的
// 3. 取整

function batches(recipe, available) {
  return Math.floor(
    Math.min(...Object.keys(recipe).map(key => available[key] / recipe[key]))
  )
}

console.log(batches(recipe, available))
