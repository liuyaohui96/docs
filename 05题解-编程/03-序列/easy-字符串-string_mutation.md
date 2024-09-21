

# sring_mutation


## 题目描述
读取一个给定的字符串，在给定的索引位置改变字符，然后打印修改后的字符串

例子：hello world 1 a => heallo world


难度：easy


通过率：98%

## 解题思路


```python
def string_mutation(s, index, c):
    string_list = list(s)
    string_list[index] = c
    return ''.join(string_list)

print(string_mutation('hello world', 1, 'a'))


# 切片方法
def string_mutation(s, index, c):
    return s[:index] + c + s[index+1:]

print(string_mutation('hello world', 1, 'a'))
```