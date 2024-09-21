

# 斐波那契数列



## 题目描述



## 解题方案

递归

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

循环

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        a = 0
        b = 1
        for i in range(2, n+1):
            c = a + b
            a = b
            b = c
        return c
```