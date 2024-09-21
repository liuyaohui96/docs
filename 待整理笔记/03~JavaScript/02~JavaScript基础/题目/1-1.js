;['1', '2', '3'].map(parseInt) // [1,NaN,NaN]

// 刨析

// map有三个参数:数组元素，元素索引，原数组本身
// parseInt有两个参数,元素本身以及进制
// 理清了这两个就好办了,
// ['1','2','3'].map(parseInt); 等于如下
;['1', '2', '3'].map(function(item, index, array) {
  return parseInt(item, index) // 是不是一目了然
})

// parseInt("1",0); => 1
// parseInt("2",1); => NaN
// parseInt("3",2); => NaN
