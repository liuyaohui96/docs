
# 阶乘



## 题目描述
给定一个正整数 n，求 n 的阶乘。n 的阶乘是所有小于等于 n 的正整数的乘积。

例如，5 的阶乘为 5×4×3×2×1 = 120


## 解题方案

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```