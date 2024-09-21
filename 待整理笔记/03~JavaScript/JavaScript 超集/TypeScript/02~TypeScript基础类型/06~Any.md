
## Any
Any 指示任何一个类型，因为有些值可能是动态的，如用户输入和第三方库，无法确定类型。

any 的值可以给除了never的任何类型辅助。

```js
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## Any 与 Object
Any 与 Object 的区别：
* any可以使值在编译阶段调用方法不进行检测
* Objcet只是允许赋任何值，但不能够在它上面调用任意的方法

```js
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```