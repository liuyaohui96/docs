
## Element对象方法-属性相关
1. Element.getAttribute()
2. Element.getAttributeNames()
3. Element.setAttribute()
4. Element.removeAttribute()
5. Element.toggleAttribute() 
6. Element.hasAttribute()
7. Element.hasAttribute()

## Element.getAttribute()
返回元素上指定属性的值,如果给定属性不存在，则返回的值将为null或者''
```js
let attributeValue = element.getAttribute(attributeName)
```

## Element.getAttributeNames()
返回一个Array，该数组包含指定元素（Element）的所有属性名称
```js
let attributeNames = element.getAttributeNames();
```


## Element.setAttribute()
设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性
```js
Element.setAttribute(name, value)
```

## Element.removeAttribute()
removeAttribute() 从元素中删除一个指定属性
```js
Element.removeAttribute(attrName)
```

若要彻底移除一个属性的效果，应当使用  removeAttribute()，而不是使用 setAttribute() 将属性值设置为  null。对于许多属性，如果仅将其值设为 null，这不会造达成和预期一样的效果

## Element.toggleAttribute() 
方法切换给定元素的某个布尔值属性的状态（如果属性存在则添加属性，属性不存在则移除属性）

## Element.hasAttribute()
返回一个布尔值，指示该元素是否包含有指定的属性（attribute）
```js
result = Element.hasAttribute(attName)
```