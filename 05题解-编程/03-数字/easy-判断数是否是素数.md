
# 判断数是否是素数



## 题目描述



## 解决方案

```python
def is_primer(n):
    if n < 2:
        return False
    if n == 2:
        return True
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

# => False
print(is_primer(10))
# => True
print(is_primer(11))
```


```python
def is_primer(n):
    if n < 2:
        return False
    if n == 2:
        return True
    for i in range(2, int(int**0.5) + 1):
        if n % i == 0:
            return False
    return True

# => False
print(is_primer(10))
# => True
print(is_primer(11))

```