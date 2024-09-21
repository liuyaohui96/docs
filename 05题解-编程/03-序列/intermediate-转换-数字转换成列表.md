
# 数字转换成列表


## 问题描述
给定一个整数，需要将其每一位上的数字提取出来，并以列表的形式存储

例子：795843 --> [7,9,5,8,4,3]

难度：intermediate


# 解决方案
1. 列表先转换成字符串
2. 因为字符串是序列，迭代字符串元素，转换成整数放到结果列表中


<br>
<br>
<br>

数学方法
1. num用%号获取个位放到列表中
2. 再用/去除个位，重复步骤，直到num小于等于0
3. 反转列表

```python
def num_to_list(num):
    return [int(i) for i in str(num)]

num = 795843
# -> [7, 9, 5, 8, 4, 3]
print(num_to_list(num))


# 数学方法
def num_to_list(num):
    result = []

    while num > 0:
        result.append(num % 10)
        num //= 10
    result.reverse()
    return result
```