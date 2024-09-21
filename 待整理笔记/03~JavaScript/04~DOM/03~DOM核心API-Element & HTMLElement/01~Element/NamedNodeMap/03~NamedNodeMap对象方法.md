
## NamedNodeMap对象方法
1. NamedNodeMap.item(index) 返回NamedNodeMap中指定index的项目，从0开始计数，可以使用更简便的`NamedNodeMap[index]`方法访问NamedNodeMap中的项目
2. NamedNodeMap.getNamedItem(value, name) 返回对应给定名称的属性
3. NamedNodeMap.getNamedItem(name, value) 在NamedNodeMap中设置指定的item
4. NamedNodeMap.removeNamedItem(name) 在NamedNodeMap中移除指定name 的item