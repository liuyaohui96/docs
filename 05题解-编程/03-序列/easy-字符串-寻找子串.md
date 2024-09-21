

# 寻找子串


## 题目描述

输入一个字符串和一个子字符串，程序需要计算给定字符串中该子字符串出现的次数，并从左到右进行字符串遍历（字母区分大小写）。约束条件是字符串中的每个字符都是 ASCII 字符

例子：输入 “ABCDCDC” 和 “CDC”，输出为 2

难度：easy


通过率：94%

## 解题思路


```python
def count_substring(string, sub_string):
    count = 0
    for i in range(len(string)):
        if string[i:i+len(sub_string)] == sub_string:
            count += 1
    return count

print(count_substring("ABCDCDC","CDC"))
```