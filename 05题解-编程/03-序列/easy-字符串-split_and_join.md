

# split_and_join


## 题目描述
给定一个由多个单词以空格分隔组成的字符串。要求实现一个名为split_and_join的函数，该函数接收一个字符串参数line，先将这个字符串按空格进行分割转换为字符串列表，然后再用连字符 “-” 将这些字符串连接起来并返回结果

例子：输入 “this is a string”，应返回 “this-is-a-string”

难度：easy


通过率：98.7%

## 解题思路


```python
def split_and_join(line):
    return '-'.join(line.split())

print(split_and_join("this is a strings"))

```

<br>
<br>
<br>

```python
def split_and_join(line):
    words = []
    current_word = ""
    for char in line:
        if char == " ":
            if current_word:
                words.append(current_word)
                current_word = ""
        else:
            current_word += char
    if current_word:
        words.append(current_word)
    result = ""
    for word in words:
        result = result + "-" + word
    return result[1:-1]

print(split_and_join("this is a strings"))
```