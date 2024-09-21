

# 求两个列表的交集


## 题目描述
给定两个列表 lst1 和 lst2，编写一个 Python 函数实现找出这两个列表的交集。交集是指同时存在于两个列表中的元素所组成的集合。要求返回的结果以列表形式呈现。
例如，lst1 = [1, 2, 3, 4]，lst2 = [3, 4, 5, 6]，则函数应返回 [3, 4]


## 解题方案

```python
def intersection(lst1, lst2):
    set1 = set(lst1)
    set2 = set(lst2)
    return list(set1 & set2)
```