

# 双胞胎素数


## 题目描述
输入一个整数n，统计显示 n 以内的所有双胞胎数（两个素数之差为 2，则该对素数称为双胞胎数，如 3，5 就是一对双胞胎数）

难度：intermediate
通过率：未统计



## 解题方案
```python
def find_twin_primers(n):
    twin_primes = []
    for num in range(2, n):
        if is_primer(num) and is_primer(num + 2):
            twin_primes.append((num, num + 2))
    return twin_primes

def is_primer(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

n = int(input("请输入 n 的值: "))
print(find_twin_primers(n))
```