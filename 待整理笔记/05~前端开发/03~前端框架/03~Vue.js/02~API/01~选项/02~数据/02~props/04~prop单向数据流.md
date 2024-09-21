
## prop单向数据流
所有prop在父子父子组件之间形成一个**单向下行绑定(one-way down binding)**，即父组件更新，更新流动到子组件，所有子组件的props都会更新，反过来则不行，这样可以避免子组件意外改变父组件的状态，这意味着不能在组件内更新props（更新props，控制台会抛出警告）

因为不能直接改变prop，如果实在需要改变prop，可以：
1. 将prop值作为data的一个属性的初始值
2. 将prop值作为computed的一个计算属性的初始值
```js
// === 将prop值作为data的一个属性的初始值
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

// === 将prop值作为computed的一个计算属性的初始值
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```