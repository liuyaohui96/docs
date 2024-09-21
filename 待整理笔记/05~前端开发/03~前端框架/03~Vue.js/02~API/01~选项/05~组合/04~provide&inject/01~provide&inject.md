
## provide & inject
provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中

1. 类型：
    * provide: `Object | () => Object`
    * inject: `Array<string> | { [key: string]: string | Symbol | Object }`

限制：
* provide 和 inject 需要一起使用，允许父级组件向子孙组件（无论层次多深）注入依赖

* provide 选项是一个对象，或者一个function返回对象，对象内包含了注入到(inject)子孙组件的依赖属性。

* inject 是一个字符串数组，或者所示一个key是本地绑定的名称，value可能是
  * 在可用的注入内容中搜索用的 key (字符串或 Symbol)
  * 一个对象。该队对象的from 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)；该对象的default属性是降级情况下使用的 value


注意，provide 和 inject 都不是响应式的，这是刻意为之，但是，如果传入了一个observerd object（可观测对象), 对象上的属性保持响应式。

```js
let Provider = {
  provide: {
    foo: 'bar'
  }
  // ...
};

// 子组件注入 'foo'
let Child = {
  inject: ['foo'],
  created() {
    console.log(this.foo); // => "bar"
  }
  // ...
};

// 2.5.0+ 的注入可以通过设置默认值使其变成可选项，from 来表示其源属性
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}

// === 与 prop 的默认值类似，你需要对非原始值使用一个工厂方法
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```