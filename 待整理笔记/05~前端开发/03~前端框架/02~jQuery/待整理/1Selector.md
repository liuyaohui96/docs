## Selector
```JavaScript
// general format
$('seletor')
```


## basic Selector
```JavaScript
// element selector
$('elemet')

// id selector
$('#id')

// class selector
$('.class')

```

## other selector
```JavaScript
// selector list
$('selector1, selector2, ...')

// descendant selector
$('selector1 selector2 ...')

// child selector
$('selector1 > selector2')

// adjacent-sibling selector 
$('selectro1 + selector') // 邻近兄弟
```

## attribute selector
```JavaScript
$('[attribute]')
$('[attribute=value]')
$('[attribute*=value]') // 包含字符
$('[attribute~=value]') // 包含一个完整的单词
$('[attribute^=value]') // 指定开始值
$('[attribute$=value]') // 指定结束值
```

## pseudo selector
```JavaScript
// general pseudo selector
$('selector:value')

$('selector:even') // special, 偶数的selector
$('selector:odd') // special, 奇数的selector
$('selector:first') // special, selector是第一个元素
$('selector:last') // special， selector是最后一个元素
$('selector:not(selector)') 

$('selector:eq(n)') // special
$('selector:gt(n)') // special
$('selector:lt(n)') // special

$('selector:header') // all header element
$('selector:animated') // all animated element
$('selector:empty') //  without child elements or text
$('selector1:has(selector2)') // special, 包含特定selector2的selector2
$('selector:contains(text)') // special, 包含特定text的selector

// selects all elements that are the parent of another element, including text nodes
$('selector:parent')


$('selector:first-child')
$('selector:first-of-type')
$('selector:last-child')
$('selector:last-0f-type')
$('selector:nth-child(n)')
$('selector:nth-last-child(n)') // counting from the last child
$('selector:nth-of-type(n)')
$('selector:only-child')
$('selector:only-of-type')
```
