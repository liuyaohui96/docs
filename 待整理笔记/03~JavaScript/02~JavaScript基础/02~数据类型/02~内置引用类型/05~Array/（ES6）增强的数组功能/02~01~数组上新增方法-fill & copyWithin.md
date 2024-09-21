
## fill
以指定值填充指定位置的数组
```js
/* 
fill(value[,start, end])
如果不指定 start 和 end 将会填充整个数组
填充位置不包括end
*/
let numbers = [1, 2, 3, 4];

numbers.fill(1);
console.log(numbers.toString());    // 1,1,1,1

numbers = [1, 2, 3, 4]; // 还原

numbers.fill(1, 2);
console.log(numbers.toString());    // 1,2,1,1

numbers.fill(0, 1, 3);
console.log(numbers.toString());    // 1,0,0,1

```

## copyWithin
`copyWithin()` 使用自身元素填充滋生数组

```js
/*
copayWithin(start[, copyStart, copyEnd])
第一个参数指定从什么位置开始填充
第二个参数指定复制位置开始的索引
第三个参数指定复制位置结束的索引，不包含该位置，如果没有，则一直复制到数组末尾
*/
let numbers = [1, 2, 3, 4];

// paste values into array starting at index 2
// copy values from array starting at index 0
numbers.copyWithin(2, 0);

console.log(numbers.toString());    // 1,2,1,2

// ====== 
let numbers = [1, 2, 3, 4];

// paste values into array starting at index 2
// copy values from array starting at index 0
// stop copying values when you hit index 1
numbers.copyWithin(2, 0, 1);

console.log(numbers.toString());    // 1,2,1,4

```