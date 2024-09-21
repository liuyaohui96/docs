var test = 'abc345efgabcab'

// 去掉字符串中的 a,b,c 字符 ,形成结果'345efg'
let str = test.replace(/[abc]/g, '')
console.log(str) // 345efg

let str2 = test.replace(/\d/g, '[$&]') // "abc[3][4][5]efgabcab"
console.log(str2)
// 若是有分组则按照$1, $2, $3的形式进行引用，
// 而 $ & 则表示的是整个正则表达式匹配的内容。

// 将字符串中的每个数字的值分别乘以2,输出:"abc6810efgabcab"

var temp = test
  .split('')
  .map(function(item) {
    return /^\d$/.test(item) ? item * 2 : item
  })
  .join('')
console.log(temp)
// "abc6810efgabcab"
