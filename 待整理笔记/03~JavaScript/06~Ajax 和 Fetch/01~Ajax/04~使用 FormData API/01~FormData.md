
## FormData
FormData 接口提供了一种表示表单数据的键值对的构造方式，FormData为创建以表单格式相同的数据用于XHR传输提供了便利（如果编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式）。

实现了 FormData 接口的对象可以直接在for...of结构中使用

## FormData构造函数
构造函数参数：
* form： 可选，当指定了表单元素，FormData对象会自动将form中的表单值也包含进去
```js
let formData = new FormData(form)
```