

# 字符串缩写替换


## 题目描述
输入一串由英文字母和数字组成的字符串，如果字符串有连续字符构成的升序段（后面字符的 ASCII 值比前面的字符的 ASCII 值大 1），则把升序段缩写成-


## 解题思路


```python
def abbreviate_string(s):
    result = ""
    i = 0
    while i < len(s):
        start = i
        while i + 1 < len(s) and ord(s[i + 1]) == ord(s[i]) + 1:  # 检查是否为连续升序段
            i += 1
        if i > start:  # 如果找到了升序段
            result += s[start] + "─" + s[i]  # 进行缩写
            i += 1
        else:  # 不是升序段，直接添加当前字符
            result += s[i]
            i += 1
    return result

string = "abcdf12345becomexy"
print(abbreviate_string(string))
```


```python
def abbreviate_str(s):
    result = ""
    flag = False  # 初始化标志位，表示是否处于升序段
    for i in range(0, len(s)-1):  # 遍历字符串（除了最后一个字符）
        # 若当前字符与下一个字符构成升序段，且之前未处于升序段
        if ord(s[i]) == ord(s[i+1]) - 1 and flag == False:  
            # 在结果中添加当前字符和 "-"
            result = result + s[i] + "-" 
            flag = True  # 标记为处于升序段
        elif ord(s[i])!= ord(s[i+1]) - 1:  # 若当前字符与下一个字符不构成升序段
            result = result + s[i]  # 在结果中添加当前字符
            flag = False  # 标记为不再处于升序段
    return result + s[-1]  # 返回结果字符串加上最后一个字符

str1 = "abcdf12345becomexy"
print(abbreviate_str(str1))  # 调用函数并打印结果
```