

# 大小写转换


## 题目描述
现一个函数swap_case，将给定字符串中的大小写字母进行转换，即小写转大写，大写转小写

例子：输入 “Www.HackerRank.com”，应返回 “wWW.hACKERrANK.COM“

难度：easy


通过率：98%

## 解题思路


```python
def swap_case(s):
    return s.swapcase()

print(swap_case(input("输入一个字符串：")))

```