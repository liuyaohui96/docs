

# 列表操作


## 题目描述
对一个空列表进行一系列操作。可以执行以下命令：
“insert i e”：在位置 i 插入整数 e。
“print”：打印列表。
“remove e”：删除列表中第一次出现的整数 e。
“append e”：在列表末尾插入整数 e。
“sort”：对列表进行排序。
“pop”：从列表中弹出最后一个元素。
“reverse”：反转列表。
首先给定一个整数 n，表示命令的数量。接下来的 n 行，每行包含一个上述命令之一。按照命令的顺序依次对列表执行相应操作，添加到列表中的元素必须是整数


例子：
9
append 7
append 8
insert 1 9
print
remove 8
sort
print
reverse
print

输出
[7, 9, 8]
[7, 9]
[9, 7]


难度：easy

通过率：90%


## 解题方案
以下是解决这个问题的步骤：

1. 首先，读取命令的数量`n`。
2. 初始化一个空列表`list`。
3. 对于接下来的`n`行命令：
   - 如果是`insert i e`命令，将整数`e`插入到列表的位置`i`。
   - 如果是`print`命令，打印当前列表。
   - 如果是`remove e`命令，删除列表中第一次出现的整数`e`。
   - 如果是`append e`命令，在列表末尾插入整数`e`。
   - 如果是`sort`命令，对列表进行排序。
   - 如果是`pop`命令，从列表中弹出最后一个元素。
   - 如果是`reverse`命令，反转列表。

以下是用 Python 实现的代码：

```python
n = int(input())
list = []
for _ in range(n):
    command = input().split()
    if command[0] == "insert":
        list.insert(int(command[1]), int(command[2]))
    elif command[0] == "print":
        print(list)
    elif command[0] == "remove":
        list.remove(int(command[1]))
    elif command[0] == "append":
        list.append(int(command[1]))
    elif command[0] == "sort":
        list.sort()
    elif command[0] == "pop":
        list.pop()
    elif command[0] == "reverse":
        list.reverse()
```