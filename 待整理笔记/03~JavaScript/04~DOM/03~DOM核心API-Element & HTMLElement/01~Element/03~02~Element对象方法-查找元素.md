
## Element对象方法-查找元素
1. Element.getElementsByClassName() 返回一个即时更新的（live） HTMLCollection，包含了所有拥有指定 class 的子元素
2. Element.getElementsByTagName() 返回一个动态的包含所有指定标签名的元素的HTML集合HTMLCollection;返回的列表是动态的，这意味着它会随着DOM树的变化自动更新自身。所以，使用相同元素和相同参数时，没有必要多次的调用Element.getElementsByTagName()
3. Element.querySelector() & Element.querySelectorAll()