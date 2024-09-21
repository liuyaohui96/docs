
# 各位相加



## 题目描述
对一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数

例子：38 --> 3 + 8 --> 11

难度：easy

大概通过率：70%


## 解决方案

递归函数思路
1. 如果 num <10则返回num
2. 设置一个total计算总和
3. 循环判断num大于0，用`num%10`得到个位数加到total中，然后用`num //= 10`去除个位数
4. 结束循环后，递归调用本函数

```python
def add_digits(num):
    # 如果数字小于 10，直接返回
    if num < 10:
        return num

    # 用于存储各位数字之和
    total = 0
    while num > 0:
        # 获取个位累加到 total 中
        total += num % 10
        # 去除个位
        num //= 10

    # 递归调用函数，必须要加上return，接受递归函数的函数值作为返回值  
    return add_digits(total)


# => 2
print(add_digits(38))
```


<br>
<br>

while循环思路
1. 如果num 大于等于10，进行以下循环
    * total记录一次循环的累计结果
    * 如果num大于0，进行以下循环
        * 用`num%10`得到个位数加到total中
        * 然后用`num //= 10`去除个位数
    * 将num赋值为total
2. 返回num的值

```python
def add_digits(num):
    # 只要数字大于等于 10，执行循环
    while num >= 10:  
        total = 0
        
        # 计算当前数字的各位数字之和
        while num > 0:  
            total += num % 10
            num //= 10
        # 将总和赋值给 num
        num = total
    return num  # 返回最终的一位数结果

print("数字 987 的处理结果：", add_digits(987))  
```