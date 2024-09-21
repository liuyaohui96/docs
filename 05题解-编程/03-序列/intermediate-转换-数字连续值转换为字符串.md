

# 数字连续值转换为字符串


## 问题描述

从标准输入中读取一个整数 n，打印1从到n的整数作为字符串

例子：5 --> 12345

难度：intermediate

通过率：97%


## 解题方案


```python
n = int(input())
result = ''

for i in range(1, n+1):
    result += str(i)
    
print(result)

```