


# 求最大公约数


## 题目描述





## 解题思路


```python
# 递归函数求最大公约数
def gcd(x, y):
    if y == 0:
        return x
    else:
        return gcd(y, x % y)
```


循环
```python

def gcd(a, b):
    while b!= 0:
        a, b = b, a % b
    return a
```