


# 循环打印非负数



## 题目描述
从标准输入读取一个整数n，对所有少于n的非负整数，输出它的平方值

例子: 3 --> 0 1 4

难度： easy

通过率：98%



## 解决方案

```python
n = int(input())
for i in range(n):
    print(i * i)
```