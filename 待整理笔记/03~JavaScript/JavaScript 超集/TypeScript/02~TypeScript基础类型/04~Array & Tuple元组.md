
## Array
有两种方式可以定义数组:
* 元素类型后面接上 []，表示由此类型元素组成的一个数组
* 使用数组泛型，`Array<元素类型>`

可以像JavaScript一样操作数组
```ts
// 元素类型后面接上 []，表示由此类型元素组成的一个数组
let list: number[] = [1, 2, 3];
// 使用数组泛型，`Array<元素类型>`
let list: Array<number> = [1, 2, 3];
```

## Tuple元组
元组是一个已知元素数量和类型的数组，各元素的类型不必相同。越界访问会报错

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```