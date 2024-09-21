

## jQuery遍历方法

1. 同级遍历方法
    * siblings(filter) 返回所有的同级元素
    * eq(index) 从0开始计数，返回指定元素的指定index元素
    * slice(start[, stop]) 返回指定元素组中start到stop的元素，从0 开始计数，不包括stop（开区间），如果忽略了stop，则从选择start到元素组的末尾；
    * next(filter) 返回指定元素的下一个元素
    * nextAll(filter) 返回指定元素的下面的所有元素
    * nextUntil(stop,filter) 返回指定元素的下面的所有元素，知道指定的stop
    * 同理，prev() & prevAll() & prevUntil()
    * is(selectorElement,function(index,element)) 判断选择的元素其中之一是否符合与selectorElement匹配
    * not(selector, function(index)) 指定的元素不是具有指定的selector

2. 下溯遍历方法
    * first() 返回指定元素的第一个子元素
    * last() 返回指定元素的最后一个子元素
    * children(filter) 返回指定元素的所有子元素
    * contents() 返回元素的所有内容，包括所有直接自孩子，文本和注释节点。与children()不同的是可以返回text node 和 comment node
    * find(filter) 遍历指定元素多个级别，返回指定元素，与children不同，children()仅遍历一个级别。与contents()不同，不返回文本节点和注释节点
    * has(element) 指定元素中是否有一个或多个指定元素


3. 上溯遍历方法
    * closest(filter[, context]) 返回指定元素的最近的祖先元素
    * parents(filter)  返回指定元素的所有祖先元素
    * parent(filter) 返回指定元素的上一级的祖先元素
    * parentsUntil(stop,filter) 返回指定元素的祖先元素，直到stop 指定的祖先元素为止
    * offsetParent() 返回指定元素最近的定位元素

5. each(function(index,element))
    ```js
    // 例子，button点击后，输出每一个li的文本内容
    $('button').click(function() {
      $('li').each(function() {
        console.log($(this).text());
      });
    });
    ```



