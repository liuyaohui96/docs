

# 列表分割



## 问题描述

给定一个列表，按照指定的大小size进行分组，返回一个包含多个大小为size的子列表的列表

举例：[1, 2, 3, 4] 2 --> [[1, 2], [3, 4]]

难度：intermediate

## 解决方案

用i指定列表的下标，迭代各个子列表的开始下标：0，0 + size，...：
* 根据子列表的开始下标，还有对应的size，用切片分割原列表
* 将子列表加入结果列表

```python
def chunk_list(lst, size):
    result = []

    for i in range(0, len(lst), size):
        result.append(lst[i:i+size])
    
    return result


lst = [1, 2, 3, 4]
size = 2

# => [[1, 2], [3, 4]]
print(chunk_list(lst, size))


# 列表推导式
def chunk_list(lst, size):
    return [lst[i: i+size] for i in range(0, len(lst), size)]
```


