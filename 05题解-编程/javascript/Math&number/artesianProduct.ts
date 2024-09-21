// ===
// Detail: artesianProduct 笛卡尔积
// Example：['x', 'y'] ['1', '2'] => [['x', '1'], ['x', '2'],['y', '1'], ['y', '2']]
// Tags: Math, Array
// Expertise: intermediate
// ===

// Solution1:
function artesianProduct(x: string[], y: string[]): string[] {
  let result = []
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      result.push([x[i], y[j]])
    }
  }
  return result
}

// x -> ['x', 'y'], y ->['1', '2']
// x.map
// 'x'
// y.map
// ['x', '1'] ①
// ['x', '2'] ②
// [①, ②] ③
// 'y'
// ...
// [③,]
// flat
function artesianProduct2(x: string[], y: string[]): any[] {
  return x.map(x =>
    y.map(y => [x, y])
  ).flat()
}


// x -> ['x', 'y'], y ->['1', '2']
// x.reduce
// 'x'
// y.map
// ['x', '1'] ①
// ['x', '2'] ②
// [①, ②] ③  => as prev
// 'y'
// y.map
// [④,⑤] ⑥
// ③.concat(⑥)
function artesianProduct3(x: string[], y: string[]): any[] {
  return x.reduce(
    (p, x) => p.concat(y.map(y => [x, y]))
    , []
  )
}



// test
console.log(artesianProduct(['x', 'y'], ['1', '2']))
// => [ [ 'x', '1' ], [ 'x', '2' ], [ 'y', '1' ], [ 'y', '2' ] ]

console.log(artesianProduct2(['x', 'y'], ['1', '2']))
// => [ [ 'x', '1' ], [ 'x', '2' ], [ 'y', '1' ], [ 'y', '2' ] ]

console.log(artesianProduct3(['x', 'y'], ['1', '2']))
// => [ [ 'x', '1' ], [ 'x', '2' ], [ 'y', '1' ], [ 'y', '2' ] ]
