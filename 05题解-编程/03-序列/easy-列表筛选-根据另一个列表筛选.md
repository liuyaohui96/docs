

# 筛选列表-根据另一个列表筛选



## 题目描述
给定一个列表，根据第二个列表中布尔值的真假，将第一个列表中的对应元素分组，真对应的值分为一组，假对应的值分为另一组

举例：[1, 2, 3, 4] [true, false, false, true] --> [[1, 4],[2, 3]]

难度：

## 解题方案

很简单，不在此阐述思路

```python
def filter_lists(list1, list2):
    true_lists = []
    false_lists = []
    
    for i in range(len(list1)):
        if list2[i]:
            true_lists.append(list1[i])
        else:
            false_lists.append(list1[i])
    
    return [true_lists, false_lists]


list1 = [1, 2, 3, 4]
list2 = [True, False, False, True]

# => [[1, 4], [2, 3]]
print(filter_lists(list1, list2))
```