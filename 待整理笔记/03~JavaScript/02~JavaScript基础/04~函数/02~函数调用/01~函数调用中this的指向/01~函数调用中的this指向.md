
## 受函数调用影响的this
this 通常指向函数的执行环境(function context), this 的指向受到函数调用方式的影响。通常使用以下的方式进行判定this的指向：

1. 判断是否是new绑定。绑定到新对象。new 绑定的优先级比显式硬绑定更高
2. 判断是否是显式绑定。call apply bind。可以可bind使用形成显式硬性绑定。- bind 的实现内部判断是否是显式绑定，如果是，就会使用新创建的this代替硬绑定的this
3. 判断是否是隐式绑定。new 不能与call， apply一起使用
4. 判断是否是默认绑定。this为winidow对象（非严格，严格为undefined）
5. 箭头函数没有自己的 this, 它的this继承于上一层代码块的this