var count = 0

console.log(typeof count === 'number') // true , 这个不用解释了

console.log(!!typeof count === 'number') // false

// 这里涉及到就是优先级和布尔值的问题
// typeof count 就是字符串"number"
// !!是转为布尔值(三目运算符的变种),非空字符串布尔值为 true
// 最后才=== 比较 , true === "number" , return false
